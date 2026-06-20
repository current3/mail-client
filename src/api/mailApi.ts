import type { Letter, FolderId } from '@/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface ServerPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function mapPostToLetter(post: ServerPost): Letter {
  const folders: FolderId[] = ['inbox', 'sent', 'spam', 'trash'];
  const folderId = folders[post.id % folders.length];

  return {
    id: String(post.id),
    folderId,
    from: `Пользователь ${post.userId}`,
    fromEmail: `user${post.userId}@example.com`,
    subject: post.title,
    preview: post.body.slice(0, 60) + '...',
    body: post.body,
    date: '2026-06-18T09:30:00Z',
    isRead: false,
    isStarred: false,
  };
}

export async function fetchLetters(): Promise<Letter[]> {
  const response = await fetch(`${BASE_URL}/posts?_limit=100`);

  if (!response.ok) {
    throw new Error(`Ошибка сети: ${response.status}`);
  }

  const posts: ServerPost[] = await response.json();
  return posts.map(mapPostToLetter);
}

export async function fetchLettersByFolder(folderId: FolderId): Promise<Letter[]> {
  const all = await fetchLetters();
  return all.filter((letter) => letter.folderId === folderId);
}