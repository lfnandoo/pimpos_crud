import { format } from 'date-fns';

export function formatSimpleDate(date: Date) {
  return format(date, 'dd/MM/yyyy');
}
