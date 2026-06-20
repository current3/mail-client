import { useState, useEffect } from 'react';
import { fetchLettersByFolder } from '@/api/mailApi';
import type { Letter, FolderId } from '@/types';

export function useLetters(folderId: FolderId) {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchLettersByFolder(folderId)
      .then((data) => {
        setLetters(data);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [folderId]);

  return { letters, isLoading, error };
}