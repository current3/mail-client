import { useState } from 'react';
import { Panel, PanelHeader, Group, Spinner, Div, Placeholder } from '@vkontakte/vkui';
import { useLetters } from '@/hooks/useLetters';
import LetterRow from '@/components/LetterRow';
import LetterViewPage from '@/pages/LetterViewPage';

function App() {
  const { letters, isLoading, error } = useLetters();
  const [openLetterId, setOpenLetterId] = useState<string | null>(null);

  const openLetter = letters.find((letter) => letter.id === openLetterId);

  if (openLetter) {
    return <LetterViewPage letter={openLetter} onBack={() => setOpenLetterId(null)} />;
  }

  return (
    <Panel>
      <PanelHeader>Почта</PanelHeader>
      {isLoading && <Div><Spinner size="m" /></Div>}
      {error && <Placeholder>{error}</Placeholder>}
      {!isLoading && !error && (
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