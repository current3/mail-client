import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </StrictMode>,
);