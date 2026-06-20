import { useState, useEffect } from 'react';
import { fetchLetterById } from '@/api/mailApi';
import type { Letter } from '@/types';

type State = {
  letter: Letter | null;
  isLoading: boolean;
};

export function useLetter(id: string | undefined) {
  const [state, setState] = useState<State>({ letter: null, isLoading: true });

  useEffect(() => {
    if (!id) return;
    let active = true;

    fetchLetterById(id).then((data) => {
      if (active) setState({ letter: data, isLoading: false });
    });

    return () => {
      active = false;
    };
  }, [id]);

  return state;
}