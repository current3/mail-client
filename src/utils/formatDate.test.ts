import { describe, it, expect } from 'vitest';
import { formatLetterDate } from './formatDate';

describe('formatLetterDate', () => {
  const now = new Date('2026-06-18T12:00:00Z');

  it('показывает время для письма за сегодня', () => {
    const result = formatLetterDate('2026-06-18T09:30:00Z', now);
    expect(result).toMatch(/\d{2}:\d{2}/);
  });

  it('показывает дату для письма за другой день', () => {
    const result = formatLetterDate('2026-06-15T09:30:00Z', now);
    expect(result).toMatch(/15/);
  });
});