import type { Letter } from '@/types';
import { LETTERS } from './mockData';

// Имитация запроса к серверу: задержка + возможная ошибка.
// Позже тело заменим на настоящий fetch, сигнатура останется той же.

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchLetters(): Promise<Letter[]> {
  await delay(800); // имитируем задержку сети
  return LETTERS;
}