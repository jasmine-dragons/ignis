import { StatusCodes } from 'http-status-codes';
import { config } from '../../../lib/config';
// import { withAuth } from '../../../middleware/withAuth';

export const classHandler = async (req, res) => {
  if (req.method == 'GET') {
    try {
      if (req.body && req.body.code) {
        const lat = req.body.lat;
        const lng = req.body.lng;

        url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${AQI_TOKEN}`;

        const res = await fetch(url);

        const aqi = res.list[0].main.aqi;

        return res.status(StatusCodes.ACCEPTED).json(aqi);
      }
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
    }
  }
  return res
    .status(StatusCodes.METHOD_NOT_ALLOWED)
    .json({ debug: req, error: 'Method not allowed' });
};
export default classHandler;
