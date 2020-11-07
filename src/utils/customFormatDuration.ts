import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  subMonths,
  subYears,
} from 'date-fns';

export const customFormatDuration = (start: Date) => {
  const result = [];
  const now = new Date();

  const years = differenceInYears(start, now);
  if (years < 0) {
    result.push(`${years} anos`.replace('-', ''));
    start = subYears(start, years);
  }

  const months = differenceInMonths(start, now);
  if (months < 0) {
    result.push(`${months} meses`.replace('-', ''));
    start = subMonths(start, months);
  }

  const days = differenceInDays(start, now);
  if (days < 0) {
    result.push(`${days} dias`.replace('-', ''));
  }

  return result.join(', ');
};
