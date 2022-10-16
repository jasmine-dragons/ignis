import axios from 'axios';
import { config } from './config';
import { MONTHS } from './constants';
const fipsMap = require('fips-state-codes');

export const getMonthLabel = index => {
  return MONTHS[index];
};

export const getMonthIndex = month => {
  return MONTHS.indexOf(month);
};

export const calcAqiLabel = index => {
  if (index < 50) return 'Good';
  else if (index < 100) return 'Moderate';
  else if (index < 150) return 'Unhealthy for Sensitive Groups';
  else if (index < 200) return 'Unhealthy';
  else if (index < 300) return 'Very Unhealthy';
  else return 'Hazardous';
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

export const getActiveFires = (long, latitude) => {
  const options = {
    method: 'GET',
    url: 'https://api.ambeedata.com/latest/fire',
    params: { lat: latitude, lng: long },
    headers: { 'x-api-key': config.AMBEE_API_KEY, 'Content-type': 'application/json' },
  };
  return axios
    .request(options)
    .then(res => {
      console.log({ res });
      return res.data;
    })
    .catch(err => console.error(err));
};
