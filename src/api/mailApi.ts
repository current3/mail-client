import type { Letter, FolderId } from '@/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface ServerPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function postToLetter(post: ServerPost): Letter {
  return {
    id: String(post.id),
    folderId: 'inbox',
    from: `Пользователь ${post.userId}`,
    fromEmail: `user${post.userId}@example.com`,
    subject: post.title,
    preview: post.body.slice(0, 60) + '...',
    body: post.body,
    date: new Date(Date.now() - post.id * 3600_000).toISOString(),
    isRead: post.id % 3 === 0,
    isStarred: post.id % 5 === 0,
  };
}

export async function fetchLetters(): Promise<Letter[]> {
  const response = await fetch(`${BASE_URL}/posts?_limit=15`);

  if (!response.ok) {
    throw new Error(`Ошибка сети: ${response.status}`);
  }

  const posts: ServerPost[] = await response.json();
  return posts.map(postToLetter);
}