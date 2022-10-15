import { useRef } from 'react';
import ReactMapGL, { Layer } from 'react-map-gl';
import { config } from '../../lib/config';
import { locations } from '../../lib/constants';
import ControlLayer from '../ControlLayer';
import bbox from '@turf/bbox';

import BorderStyles from '../MapStyles/BorderStyles';
// const style = 'mapbox://styles/acmhacks/cl99a828b006m14pdvvisfm7w';

const MapWrapper = () => {
  const mapRef = useRef();

  const onClick = event => {
    const feature = event.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);

      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 40, duration: 1000 }
      );
    }
  };

  return (
    <div>
      <ReactMapGL
        ref={mapRef}
        initialViewState={{
          zoom: 10,
          ...locations.LA_JOLLA,
        }}
        style={{ width: '100vw', height: 'calc(100vh - 4.25rem)' }}
        projection="globe"
        mapboxAccessToken={config.MAPBOX_TOKEN}
        mapStyle={BorderStyles}
        interactiveLayerIds={['county-fill']}
        onClick={onClick}
      >
        <ControlLayer />
        {/* <Layer type="custom" renderingMode="3d" /> */}
      </ReactMapGL>
    </div>
  );
};

export default MapWrapper;
