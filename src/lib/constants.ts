import { Coordinate } from "./types";

export enum MONTHS {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

interface LocationType {
  [key: string]: Coordinate;
}

export const locations: LocationType = {
  LA_JOLLA: {
    longitude: -117.2713,
    latitude: 32.8328,
  },
  LOS_ANGELES: {
    longitude: -118.2437,
    latitude: 34.0422,
  },
};
