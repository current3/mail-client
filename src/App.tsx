import { Routes, Route } from 'react-router-dom';
import LettersListPage from '@/pages/LettersListPage';
import LetterViewPage from '@/pages/LetterViewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LettersListPage />} />
      <Route path="/letter/:id" element={<LetterViewPage />} />
    </Routes>
  );
}

export default App;