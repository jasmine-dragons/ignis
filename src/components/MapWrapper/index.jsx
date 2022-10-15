import { useRef, useState, useCallback, useMemo } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import { config } from '../../lib/config';
import { locations } from '../../lib/constants';
import ControlLayer from '../ControlLayer';
import bbox from '@turf/bbox';

import BorderStyles, {
  countiesFillLayer,
  highlightFillLayer,
  lineLayer,
  fillLayer,
} from '../MapStyles/BorderStyles';
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

  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback(event => {
    const county = event.features && event.features[0];
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      countyName: county && county.properties.COUNTY,
    });
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';

  const filter = useMemo(() => ['in', 'COUNTY', selectedCounty], [selectedCounty]);

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
        interactiveLayerIds={['counties']}
        onMouseMove={onHover}
        onClick={onClick}
      >
        <ControlLayer />
        {/* <Layer type="custom" renderingMode="3d" /> */}
        <Source type="vector" url="mapbox://mapbox.82pkq93d">
          <Layer beforeId="waterway-label" {...countiesFillLayer} />
          <Layer beforeId="waterway-label" {...highlightFillLayer} filter={filter} />
        </Source>
        <Source type="vector" url="mapbox://mapbox.82pkq93d">
          <Layer beforeId="waterway-label" {...fillLayer} />
          <Layer beforeId="waterway-label" {...lineLayer} />
        </Source>
      </ReactMapGL>
    </div>
  );
};

export default MapWrapper;
