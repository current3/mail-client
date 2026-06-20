import { useNavigate, useParams } from 'react-router-dom';
import { Panel, PanelHeader, Group, Cell } from '@vkontakte/vkui';
import { FOLDERS } from '@/api/mockData';

function FolderNav() {
  const navigate = useNavigate();
  const { folderId } = useParams<{ folderId: string }>();

  return (
    <Panel>
      <PanelHeader>Папки</PanelHeader>
      <Group>
        {FOLDERS.map((folder) => (
          <Cell
            key={folder.id}
            selected={folder.id === folderId}
            onClick={() => navigate(`/folder/${folder.id}`)}
            indicator={folder.unreadCount > 0 ? folder.unreadCount : undefined}
          >
            {folder.title}
          </Cell>
        ))}
      </Group>
    </Panel>
  );
}

export default FolderNav;