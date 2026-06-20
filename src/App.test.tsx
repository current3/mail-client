import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ConfigProvider, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import App from './App';
import * as mailApi from '@/api/mailApi';
import type { Letter } from '@/types';

const MOCK_LETTERS: Letter[] = [
  {
    id: '1', folderId: 'inbox', from: 'VK', fromEmail: 'vk@vk.com',
    subject: 'Приглашение на интервью', preview: 'превью 1', body: 'тело 1',
    date: '2026-06-18T09:30:00Z', isRead: false, isStarred: true,
  },
  {
    id: '2', folderId: 'inbox', from: 'GitLab', fromEmail: 'g@g.com',
    subject: 'Merge request', preview: 'превью 2', body: 'тело 2',
    date: '2026-06-17T09:30:00Z', isRead: true, isStarred: false,
  },
];

function renderApp() {
  return render(
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>,
  );
}

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(mailApi, 'fetchLetters').mockResolvedValue(MOCK_LETTERS);
  });

  it('загружает и показывает список писем', async () => {
    renderApp();
    expect(await screen.findByText('Приглашение на интервью')).toBeInTheDocument();
    expect(screen.getByText('Merge request')).toBeInTheDocument();
  });

  it('фильтрует письма по поиску', async () => {
    renderApp();
    await screen.findByText('Приглашение на интервью');

    const search = screen.getByPlaceholderText('Поиск писем');
    await userEvent.type(search, 'merge');

    await waitFor(() => {
      expect(screen.queryByText('Приглашение на интервью')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Merge request')).toBeInTheDocument();
  });

  it('открывает письмо по клику', async () => {
    renderApp();
    const letter = await screen.findByText('Приглашение на интервью');

    await userEvent.click(letter);
    expect(await screen.findByText('vk@vk.com')).toBeInTheDocument();
  });
});