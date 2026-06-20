import type { Letter } from '@/types';
import { LETTERS } from './mockData';

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchLetters(): Promise<Letter[]> {
  await delay(800);
  if (Math.random() < 0.1) {
    throw new Error('Не удалось загрузить письма');
  }
  return LETTERS;
}