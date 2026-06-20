import { memo } from 'react';
import { Cell, Avatar } from '@vkontakte/vkui';
import { Icon16Favorite } from '@vkontakte/icons';
import type { Letter } from '@/types';
import { formatLetterDate } from '@/utils/formatDate';

interface LetterRowProps {
  letter: Letter;
  onClick: (id: string) => void;
}

function gradientFromString(str: string): 1 | 2 | 3 | 4 | 5 | 6 {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return ((sum % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

function LetterRow({ letter, onClick }: LetterRowProps) {
  return (
    <Cell
      before={
        <Avatar
            size={40}
            initials={letter.from[0]}
            gradientColor={gradientFromString(letter.from)}
        />
        }
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