import { useState, useEffect } from 'react';
import { fetchLetters } from '@/api/mailApi';
import type { Letter } from '@/types';

export function useLetters() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchLetters()
      .then((data) => {
        setLetters(data);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { letters, isLoading, error };
}