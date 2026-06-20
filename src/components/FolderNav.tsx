import { useNavigate, useParams } from 'react-router-dom';
import { Panel, PanelHeader, Group, Cell } from '@vkontakte/vkui';
import { FOLDERS } from '@/api/mockData';
import {
  Icon28MailOutline,
  Icon28SendOutline,
  Icon28WarningTriangleOutline,
  Icon28DeleteOutline,
} from '@vkontakte/icons';
import type { FolderId } from '@/types';

const FOLDER_ICONS: Record<FolderId, React.ReactNode> = {
  inbox: <Icon28MailOutline />,
  sent: <Icon28SendOutline />,
  spam: <Icon28WarningTriangleOutline />,
  trash: <Icon28DeleteOutline />,
};

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
            before={FOLDER_ICONS[folder.id]}
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