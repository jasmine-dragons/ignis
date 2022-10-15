import { config } from '@/lib/config';
import { locations } from '@/lib/constants';
import { memo } from 'react';
import Map, { Layer } from 'react-map-gl';
import MarkerWrapper from '../MarkerWrapper';

const MapWrapper = () => {
  const { latitude, longitude } = locations.LA_JOLLA;
  return (
    <Map
      initialViewState={{
        zoom: 10,
        ...locations.LA_JOLLA,
      }}
      style={{ width: 'calc(100vw - 4rem)', height: '50vh', margin: '2rem' }}
      projection="globe"
      mapboxAccessToken={config.MAPBOX_TOKEN}
      mapStyle="mapbox://styles/acmhacks/cl99a828b006m14pdvvisfm7w"
    >
      {/* <Layer /> */}
      <MarkerWrapper latitude={latitude} longitude={longitude} />
    </Map>
  );
};

export default memo(MapWrapper);
