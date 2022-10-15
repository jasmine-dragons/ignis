import style from './style.module.scss';
import ReactMapGL from 'react-map-gl';
import { config } from '../../lib/config';
import { locations } from '../../lib/constants';

const MapWrapper = () => {
  console.log('map');
  return (
    <div className={style.container}>
      <ReactMapGL
        mapboxAccessToken="pk.eyJ1IjoiYWNtaGFja3MiLCJhIjoiY2w5OTlzN3BnM2ZpazN1bXhkZzl5cnk1ZCJ9.3PHR5hWGMwMUOg2tXsfZ3g"
        initialViewState={{
          ...locations.LA_JOLLA,
          zoom: 4,
        }}
        style={{
          width: 'max-content',
        }}
        projection="globe"
        mapStyle="mapbox://styles/mapbox/streets-v9"
      ></ReactMapGL>
    </div>
  );
};

export default MapWrapper;
