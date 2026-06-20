import { Panel, PanelHeader, PanelHeaderBack, Group, Header, Div, SimpleCell } from '@vkontakte/vkui';
import type { Letter } from '@/types';

interface LetterViewPageProps {
  letter: Letter;
  onBack: () => void;
}

function LetterViewPage({ letter, onBack }: LetterViewPageProps) {
  return (
    <Panel>
      <PanelHeader before={<PanelHeaderBack onClick={onBack} />}>
        Письмо
      </PanelHeader>
      <Group header={<Header>{letter.subject}</Header>}>
        <SimpleCell subtitle={letter.fromEmail}>{letter.from}</SimpleCell>
        <Div>{letter.body}</Div>
      </Group>
    </Panel>
  );
}

export default LetterViewPage;