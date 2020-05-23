export function getFullTextDay(d: string) {
  const date = new Date(d);
  const TEXT_DAY = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return TEXT_DAY[date.getDay()];
}
