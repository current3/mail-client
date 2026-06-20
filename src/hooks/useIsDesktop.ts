import { useState, useEffect } from 'react';

export function useIsDesktop(): boolean {
  const query = '(min-width: 768px)';

  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return isDesktop;
}