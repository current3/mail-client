import { Routes, Route, Navigate } from 'react-router-dom';
import { SplitLayout, SplitCol } from '@vkontakte/vkui';
import FolderNav from '@/components/FolderNav';
import LettersListPage from '@/pages/LettersListPage';
import LetterViewPage from '@/pages/LetterViewPage';

function App() {
  return (
    <SplitLayout>
      <SplitCol fixed width={280} maxWidth={280}>
        <FolderNav />
      </SplitCol>
      <SplitCol>
        <Routes>
          <Route path="/" element={<Navigate to="/folder/inbox" replace />} />
          <Route path="/folder/:folderId" element={<LettersListPage />} />
          <Route path="/letter/:id" element={<LetterViewPage />} />
        </Routes>
      </SplitCol>
    </SplitLayout>
  );
}

export default App;