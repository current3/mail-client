export function formatLetterDate(iso: string, now: Date = new Date()): string {
    const date = new Date(iso);
    const sameDay =
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() && 
        date.getDate() === now.getDate();

    if (sameDay) {
        return date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    return date.toLocaleDateString('ru-RU', {day: 'numeric', month: 'short'});
}