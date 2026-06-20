import type {Letter, Folder} from '@/types';


export const FOLDERS: Folder[] = [
  { id: 'inbox', title: 'Входящие', unreadCount: 2 },
  { id: 'sent', title: 'Отправленные', unreadCount: 0 },
  { id: 'spam', title: 'Спам', unreadCount: 1 },
  { id: 'trash', title: 'Корзина', unreadCount: 0 },
];

export const LETTERS: Letter[] = [
  {
    id: '1',
    folderId: 'inbox',
    from: 'VK Команда',
    fromEmail: 'team@vk.company',
    subject: 'Приглашение на техническое интервью',
    preview: 'Здравствуйте! Мы рассмотрели ваше резюме и хотели бы...',
    body: 'Здравствуйте! Мы рассмотрели ваше резюме и хотели бы пригласить вас на техническое интервью.',
    date: '2026-06-18T09:30:00Z',
    isRead: false,
    isStarred: true,
  },
  {
    id: '2',
    folderId: 'inbox',
    from: 'GitLab',
    fromEmail: 'noreply@gitlab.com',
    subject: 'Merge request требует вашего ревью',
    preview: 'В проекте mail-client появился новый MR...',
    body: 'В проекте mail-client появился новый MR: feat/letter-list. Автор просит провести код-ревью.',
    date: '2026-06-17T14:12:00Z',
    isRead: false,
    isStarred: false,
  },
  {
    id: '3',
    folderId: 'inbox',
    from: 'Дайджест Хабра',
    fromEmail: 'digest@habr.com',
    subject: 'React 18: что нужно знать про Concurrent features',
    preview: 'Разбираем useTransition, useDeferredValue...',
    body: 'Разбираем useTransition, useDeferredValue и автоматический батчинг.',
    date: '2026-06-16T08:00:00Z',
    isRead: true,
    isStarred: false,
  },
];