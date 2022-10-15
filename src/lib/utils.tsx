import { MONTHS } from "./constants";

export const getMonthLabel = (index: number) => {
  return Object.keys(MONTHS)[index];
};

export const getMonthIndex = (month: string) => {
  return Object.keys(MONTHS).indexOf(month);
};
