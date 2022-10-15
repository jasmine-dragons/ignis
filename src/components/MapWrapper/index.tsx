import { config } from '@/lib/config';
import { locations } from '@/lib/constants';
import { memo } from 'react';
import ReactMapGL from 'react-map-gl';

const MapWrapper = () => {
  // const { latitude, longitude } = locations.LA_JOLLA;
  // const render = () => {
  //   return;
  // };

  // const onAdd = () => {
  //   return;
  // };

  return (
    <ReactMapGL
      initialViewState={{
        zoom: 10,
        ...locations.LA_JOLLA,
      }}
      style={{ width: 'calc(100vw - 4rem)', height: '50vh', margin: '2rem' }}
      projection="globe"
      mapboxAccessToken={config.MAPBOX_TOKEN}
      mapStyle="mapbox://styles/acmhacks/cl99a828b006m14pdvvisfm7w"
    >
      {/* <Layer type="custom" renderingMode="3d" render={render} onAdd={onAdd} /> */}
      {/* <MarkerWrapper latitude={latitude} longitude={longitude} /> */}
      {/* <GeolocateControl
        trackUserLocation
        positionOptions={{ enableHighAccuracy: true }}
        style={{ top: 20, right: 20 }}
      /> */}
    </ReactMapGL>
  );
};

export default memo(MapWrapper);
