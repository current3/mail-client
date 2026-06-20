import { Panel, PanelHeader, Group } from '@vkontakte/vkui';
import { LETTERS } from '@/api/mockData';
import LetterRow from '@/components/LetterRow';

function App() {
  return (
    <Panel>
      <PanelHeader>Почта</PanelHeader>
      <Group>
        {LETTERS.map((letter) => (
          <LetterRow key={letter.id} letter={letter} />
        ))}
      </Group>
    </Panel>
  );
}

export default App;