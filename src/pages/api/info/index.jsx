import { StatusCodes } from 'http-status-codes';
import { config } from '../../../lib/config';

export const classHandler = async (req, res) => {
  if (req.method === 'GET') {
    console.log('hi');
    try {
      const lat = req.body.lat;
      const lng = req.body.lng;
      const AQI_TOKEN = config.AQI_TOKEN;
      console.log(AQI_TOKEN);
      const url =
        'http://api.openweathermap.org/data/2.5/air_pollution?lat=' +
        lat +
        '&lon=' +
        lng +
        '&appid=' +
        AQI_TOKEN;
      let response = await fetch(url);
      response = await response.json();

      return res.status(StatusCodes.ACCEPTED).json(response);
    } catch (e) {
      console.log(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
    }
  }
  return res
    .status(StatusCodes.METHOD_NOT_ALLOWED)
    .json({ debug: req.method, error: 'Method not allowed' });
};
export default classHandler;
