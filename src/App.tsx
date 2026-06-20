import { useState } from 'react';
import { Panel, PanelHeader, Group } from '@vkontakte/vkui';
import { LETTERS } from '@/api/mockData';
import LetterRow from '@/components/LetterRow';
import LetterViewPage from '@/pages/LetterViewPage';

function App() {
  const [openLetterId, setOpenLetterId] = useState<string | null>(null);

  const openLetter = LETTERS.find((letter) => letter.id === openLetterId);

  if (openLetter) {
    return <LetterViewPage letter={openLetter} onBack={() => setOpenLetterId(null)} />;
  }

  return (
    <Panel>
      <PanelHeader>Почта</PanelHeader>
      <Group>
        {LETTERS.map((letter) => (
          <LetterRow
            key={letter.id}
            letter={letter}
            onClick={() => setOpenLetterId(letter.id)}
          />
        ))}
      </Group>
    </Panel>
  );
}

export default App;