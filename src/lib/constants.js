export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const defaultDrawerProps = {
  county: 'San Diego County',
  state: 'CA',
  thumbnail:
    'https://acmucsd.s3.us-west-1.amazonaws.com/portal/events/f718c917-9ec1-48b9-8f58-c0e6908afec2.png',
  population: 2000000,
  aqi: 74,
  alerts: [
    {
      title: 'Fire Danger',
      level: 'Low',
      description:
        'Fuels do not ignite easily from small embers, but from a more intense heat source, such as lightning, may start fires in duff or dry rotten wood. Fires in open, dry grasslands may burn easily a few hours after a rain, but most wood fires will spread slowly, creeping or smoldering.  Control of fires is generally easy.',
    },
    {
      title: 'Fire Danger',
      level: 'Low',
      description:
        'Fuels do not ignite easily from small embers, but from a more intense heat source, such as lightning, may start fires in duff or dry rotten wood. Fires in open, dry grasslands may burn easily a few hours after a rain, but most wood fires will spread slowly, creeping or smoldering.  Control of fires is generally easy.',
    },
  ],
};

export const locations = {
  LA_JOLLA: {
    longitude: -117.2713,
    latitude: 32.8328,
  },
  LOS_ANGELES: {
    longitude: -118.2437,
    latitude: 34.0422,
  },
};
