export default function isToday(day) {
  const daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];
  const todayIndex = new Date().getDay();
  return daysOfWeek[todayIndex] === day;
}

