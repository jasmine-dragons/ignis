import { MONTHS } from './constants';

export const getMonthLabel = index => {
  return MONTHS[index];
};

export const getMonthIndex = month => {
  return MONTHS.indexOf(month);
};
