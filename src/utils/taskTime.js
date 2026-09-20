export const NO_DATE_LABEL = 'No date';

export function computeHours(startDate, endDate) {
  if (!startDate || !endDate) return 0;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInHours = (end.getTime() - start.getTime()) / 3600000;
  if (Number.isNaN(diffInHours) || diffInHours <= 0) return 0;
  return Math.round(diffInHours * 100) / 100;
}

export function toDateKey(date) {
  return date ? date.slice(0, 10) : '';
}

export function formatDate(dateKey) {
  if (!dateKey) return NO_DATE_LABEL;
  return new Date(`${dateKey}T00:00:00`).toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function formatTime(date) {
  if (!date) return '';
  return new Date(date).toLocaleString(undefined, {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function groupTasksByDate(tasks) {
  const groups = new Map();

  tasks.forEach(task => {
    const dateKey = toDateKey(task.startDate);
    if (!groups.has(dateKey)) groups.set(dateKey, []);
    groups.get(dateKey).push(task);
  });

  return [...groups.entries()]
    .sort(([a], [b]) => {
      if (!a) return 1;
      if (!b) return -1;
      return a.localeCompare(b);
    })
    .map(([dateKey, groupedTasks]) => ({ dateKey, tasks: groupedTasks }));
}
