export type FolderId = 'inbox' | 'sent' | 'spam' | 'trash';

export interface Folder{
    id: FolderId;
    title: string;
    unreadCount: number;
}

export interface Letter{
    id: string;
    folderId: FolderId;
    from: string;
    fromEmail: string;
    subject: string;
    preview: string;
    body: string;
    date: string;
    isRead: boolean;
    isStarred: boolean;
}