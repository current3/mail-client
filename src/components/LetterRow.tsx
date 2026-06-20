import { Cell, Avatar } from '@vkontakte/vkui';
import type { Letter } from '@/types';
import { formatLetterDate } from '@/utils/formatDate';

interface LetterRowProps {
  letter: Letter;
}

function LetterRow({ letter }: LetterRowProps) {
  return (
    <Cell
      before={<Avatar size={40} initials={letter.from[0]} />}
      subtitle={letter.preview}
      indicator={formatLetterDate(letter.date)}
    >
      {letter.subject}
    </Cell>
  );
}

export default LetterRow;