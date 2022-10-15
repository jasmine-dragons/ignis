import { config } from '@/lib/config';
import { locations } from '@/lib/constants';
import { memo } from 'react';
import ReactMapGL, { Layer } from 'react-map-gl';

const MapWrapper = () => {
  return (
    <ReactMapGL
      initialViewState={{
        zoom: 10,
        ...locations.LA_JOLLA,
      }}
      style={{ width: 'calc(100vw - 4rem)', height: '50vh', margin: '2rem' }}
      mapboxAccessToken={config.MAPBOX_TOKEN}
      mapStyle="mapbox://styles/acmhacks/cl99a828b006m14pdvvisfm7w"
    >
      {/* <Layer /> */}
    </ReactMapGL>
  );
};

export default memo(MapWrapper);
