import style from './style.module.scss';
import ReactMapGL, { NavigationControl, GeolocateControl, Layer } from 'react-map-gl';
import { config } from '../../lib/config';
import { locations } from '../../lib/constants';

const MapWrapper = () => {

  const style = "mapbox://styles/acmhacks/cl99a828b006m14pdvvisfm7w"

  return (
    <div className={style.container}>
      <ReactMapGL
        initialViewState={{
          zoom: 10,
          ...locations.LA_JOLLA,
        }}
        style={{ width: "100vw", height: "calc(100vh - 4rem - 4px)" }}
        projection="globe"
        mapboxAccessToken={config.MAPBOX_TOKEN}
        mapStyle={style}
      >
      <NavigationControl />
      <GeolocateControl trackUserLocation />
      <Layer 
        type='custom'
        renderingMode='3d'/>
      </ReactMapGL>
     </div>
  );
};

export default MapWrapper;