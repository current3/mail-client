import { useParams, useNavigate } from 'react-router-dom';
import { Panel, PanelHeader, PanelHeaderBack, Group, Header, Div, SimpleCell, Spinner, Placeholder } from '@vkontakte/vkui';
import { useLetters } from '@/hooks/useLetters';

function LetterViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { letters, isLoading } = useLetters();

  const letter = letters.find((l) => l.id === id);

  return (
    <Panel>
      <PanelHeader before={<PanelHeaderBack onClick={() => navigate('/')} />}>
        Письмо
      </PanelHeader>
      {isLoading && <Div><Spinner size="m" /></Div>}
      {!isLoading && !letter && <Placeholder>Письмо не найдено</Placeholder>}
      {letter && (
        <Group header={<Header>{letter.subject}</Header>}>
          <SimpleCell subtitle={letter.fromEmail}>{letter.from}</SimpleCell>
          <Div>{letter.body}</Div>
        </Group>
      )}
    </Panel>
  );
}

export default LetterViewPage;