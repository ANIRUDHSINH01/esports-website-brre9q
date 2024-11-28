import { format, parseISO } from 'date-fns';

export function formatDate(date: string): string {
  return format(parseISO(date), 'MMM dd, yyyy');
}

export function formatDateTime(date: string): string {
  return format(parseISO(date), 'MMM dd, yyyy HH:mm');
}

export function formatTimeAgo(date: string): string {
  const now = new Date();
  const parsedDate = parseISO(date);
  const diffInMinutes = Math.floor((now.getTime() - parsedDate.getTime()) / 1000 / 60);

  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)}h ago`;
  } else {
    return formatDate(date);
  }
}