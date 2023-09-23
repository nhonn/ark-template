import { format, parseISO } from 'date-fns';

type Options = Parameters<typeof format>[2];

const DEFAULT_FORMAT = 'dd MM yyyy';

export const formatDate = (
  date: string,
  dateFormat?: string,
  options?: Options,
) => {
  return format(parseISO(date), dateFormat ?? DEFAULT_FORMAT, options);
};
