import axios from 'axios';
import { MONTHS } from './constants';
const fipsMap = require('fips-state-codes');

export const getMonthLabel = index => {
  return MONTHS[index];
};

export const getMonthIndex = month => {
  return MONTHS.indexOf(month);
};

export const calcAqiLabel = index => {
  return 'Good';
};

export const getStateLabel = county => {
  return fipsMap[county.properties.FIPS.toString().slice(0, 2)];
};

export const getThumbnail = query => {
  return axios
    .get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=av0absFqo8bnAh5OryvyoEk8c_85raTu3m4ld8md-c4`
    )
    .then(res => res.data.results[0].urls.small)
    .catch(err => console.log(err));
};
