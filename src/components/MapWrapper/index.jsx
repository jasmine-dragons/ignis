import { useRef, useState, useCallback, useMemo } from 'react';
import ReactMapGL, { Layer, Popup, Source } from 'react-map-gl';
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
import GeocoderControl from '../GeocoderControl';

const MapWrapper = () => {
  const mapRef = useRef();
  const [hoverInfo, setHoverInfo] = useState(null);
  const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';

  const onClick = event => {
    const feature = event.features[0];
    if (feature) {
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

  const onHover = useCallback(event => {
    const county = event.features && event.features[0];
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      countyName: county && county.properties.COUNTY,
    });
  }, []);

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
        interactiveLayerIds={['counties', 'county-fill']}
        onMouseMove={onHover}
        onClick={onClick}
      >
        <GeocoderControl mapboxAccessToken={config.MAPBOX_TOKEN} position="top-left" />
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
        {hoverInfo && selectedCounty && (
          <Popup
            longitude={hoverInfo.longitude}
            latitude={hoverInfo.latitude}
            offset={[0, -10]}
            closeButton={false}
            closeOnClick={false}
            className="county-info"
          >
            {selectedCounty}
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapWrapper;
