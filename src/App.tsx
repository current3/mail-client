import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { SplitLayout, SplitCol, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28MailOutline } from '@vkontakte/icons';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import FolderNav from '@/components/FolderNav';
import LettersListPage from '@/pages/LettersListPage';
import LetterViewPage from '@/pages/LetterViewPage';
import { FOLDERS } from '@/api/mockData';

function App() {
  const isDesktop = useIsDesktop();
  const navigate = useNavigate();

  return (
    <SplitLayout>
      {isDesktop && (
        <SplitCol fixed width={280} maxWidth={280}>
          <FolderNav />
        </SplitCol>
      )}
      <SplitCol>
        <Routes>
          <Route path="/" element={<Navigate to="/folder/inbox" replace />} />
          <Route path="/folder/:folderId" element={<LettersListPage />} />
          <Route path="/letter/:id" element={<LetterViewPage />} />
        </Routes>

        {!isDesktop && (
          <Tabbar>
            {FOLDERS.map((folder) => (
              <TabbarItem
                key={folder.id}
                aria-label={folder.title}
                onClick={() => navigate(`/folder/${folder.id}`)}
              >
                <Icon28MailOutline />
              </TabbarItem>
            ))}
          </Tabbar>
        )}
      </SplitCol>
    </SplitLayout>
  );
}

export default App;