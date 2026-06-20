import { useState, useMemo, useCallback, lazy, Suspense } from 'react';
import { Panel, PanelHeader, Group, Spinner, Div, Placeholder, Search } from '@vkontakte/vkui';
import { useLetters } from '@/hooks/useLetters';
import LetterRow from '@/components/LetterRow';

const LetterViewPage = lazy(() => import('@/pages/LetterViewPage'));

function App() {
  const { letters, isLoading, error } = useLetters();
  const [openLetterId, setOpenLetterId] = useState<string | null>(null);
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

  const handleOpenLetter = useCallback((id: string) => {
    setOpenLetterId(id);
  }, []);

  const openLetter = letters.find((letter) => letter.id === openLetterId);

  if (openLetter) {
    return (
      <Suspense fallback={<Div><Spinner size="m" /></Div>}>
        <LetterViewPage letter={openLetter} onBack={() => setOpenLetterId(null)} />
      </Suspense>
    );
  }

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

export default App;