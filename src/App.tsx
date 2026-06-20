import { useState, useEffect } from 'react';
import { Panel, PanelHeader, Group, Spinner, Div } from '@vkontakte/vkui';
import { fetchLetters } from '@/api/mailApi';
import type { Letter } from '@/types';
import LetterRow from '@/components/LetterRow';
import LetterViewPage from '@/pages/LetterViewPage';

function App() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openLetterId, setOpenLetterId] = useState<string | null>(null);

  useEffect(() => {
    fetchLetters().then((data) => {
      setLetters(data);
      setIsLoading(false);
    });
  }, []);

  const openLetter = letters.find((letter) => letter.id === openLetterId);

  if (openLetter) {
    return <LetterViewPage letter={openLetter} onBack={() => setOpenLetterId(null)} />;
  }

  return (
    <Panel>
      <PanelHeader>Почта</PanelHeader>
      {isLoading ? (
        <Div><Spinner size="m" /></Div>
      ) : (
        <Group>
          {letters.map((letter) => (
            <LetterRow
              key={letter.id}
              letter={letter}
              onClick={() => setOpenLetterId(letter.id)}
            />
          ))}
        </Group>
      )}
    </Panel>
  );
}

export default App;