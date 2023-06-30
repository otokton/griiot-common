import { nanoid } from 'nanoid';

export function getGlobalName(name: string): string {
  const t = `${(name as string)
    ?.trim()
    .replace('\\s+', ' ')
    .replace(' ', '-')}-${nanoid(10).replace(/_/g, '')}`.toLowerCase();
  return t.length > 23 ? t.slice(0, 22) : t;
}
