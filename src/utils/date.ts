import { format } from 'date-fns';

export const formatApiDate = (dt: number) => {
  return format(new Date(dt * 1000), 'dd/MM/yyyy');
};
