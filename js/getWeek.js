export default function () {
  const date = new Date();

  let firstDateOfYear = new Date(date.getFullYear(), 0, 1);
  let difference = date - firstDateOfYear;
  let weekNumber = Math.ceil((difference + 1) / (1000 * 60 * 60 * 24 * 7));

  return (weekNumber % 2 !== 0);
}