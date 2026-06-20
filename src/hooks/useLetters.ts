import { useState, useEffect } from 'react';
import { fetchLettersByFolder } from '@/api/mailApi';
import type { Letter, FolderId } from '@/types';

type State = {
  letters: Letter[];
  isLoading: boolean;
  error: string | null;
};

export function useLetters(folderId: FolderId) {
  const [state, setState] = useState<State>({
    letters: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;

    fetchLettersByFolder(folderId)
      .then((data) => {
        if (active) setState({ letters: data, isLoading: false, error: null });
      })
      .catch((err: unknown) => {
        if (active) {
          setState({
            letters: [],
            isLoading: false,
            error: err instanceof Error ? err.message : 'Неизвестная ошибка',
          });
        }
      });

    return () => {
      active = false;
    };
  }, [folderId]);

  return state;
}