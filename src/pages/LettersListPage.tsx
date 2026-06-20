import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Panel, PanelHeader, Group, Spinner, Div, Placeholder, Search } from '@vkontakte/vkui';
import { useLetters } from '@/hooks/useLetters';
import LetterRow from '@/components/LetterRow';

function LettersListPage() {
  const navigate = useNavigate();
  const { letters, isLoading, error } = useLetters();
  const [query, setQuery] = useState('');

  const visibleLetters = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return letters;
    return letters.filter(
      (letter) =>
        letter.subject.toLowerCase().includes(q) ||
        letter.from.toLowerCase().includes(q) ||
        letter.preview.toLowerCase().includes(q),
    );
  }, [letters, query]);

  const handleOpenLetter = useCallback(
    (id: string) => {
      navigate(`/letter/${id}`);
    },
    [navigate],
  );

  return (
    <Panel>
      <PanelHeader>Почта</PanelHeader>
      <Search value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск писем" />
      {isLoading && <Div><Spinner size="m" /></Div>}
      {error && <Placeholder>{error}</Placeholder>}
      {!isLoading && !error && (
        <Group>
          {visibleLetters.length === 0 ? (
            <Placeholder>Ничего не найдено</Placeholder>
          ) : (
            visibleLetters.map((letter) => (
              <LetterRow key={letter.id} letter={letter} onClick={handleOpenLetter} />
            ))
          )}
        </Group>
      )}
    </Panel>
  );
}

export default LettersListPage;