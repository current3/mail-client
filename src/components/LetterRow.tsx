import { memo } from 'react';
import { Cell, Avatar } from '@vkontakte/vkui';
import { Icon16Favorite } from '@vkontakte/icons';
import type { Letter } from '@/types';
import { formatLetterDate } from '@/utils/formatDate';

interface LetterRowProps {
  letter: Letter;
  onClick: (id: string) => void;
}

function LetterRow({ letter, onClick }: LetterRowProps) {
  return (
    <Cell
      before={<Avatar size={40} initials={letter.from[0]} />}
      subtitle={letter.preview}
      indicator={formatLetterDate(letter.date)}
      after={letter.isStarred ? <Icon16Favorite /> : undefined}
      onClick={() => onClick(letter.id)}
      style={{ fontWeight: letter.isRead ? 'normal' : 600 }}
    >
      {letter.subject}
    </Cell>
  );
}

export default memo(LetterRow);