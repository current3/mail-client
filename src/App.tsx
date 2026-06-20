import { Panel, PanelHeader, Group, Cell, Avatar } from '@vkontakte/vkui';
import { LETTERS } from '@/api/mockData';

function App() {
  return (
    <Panel>
      <PanelHeader>Почта</PanelHeader>
      <Group>
        {LETTERS.map((letter) => (
          <Cell
            key={letter.id}
            before={<Avatar size={40} initials={letter.from[0]} />}
            subtitle={letter.preview}
          >
            {letter.subject}
          </Cell>
        ))}
      </Group>
    </Panel>
  );
}

export default App;