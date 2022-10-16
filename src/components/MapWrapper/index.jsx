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
import PopupCard from '../PopupCard';

const MapWrapper = () => {
  const mapRef = useRef();
  const [hoverInfo, setHoverInfo] = useState(null);
  const handleViewportChange = useCallback(newViewport => setViewport(newViewport), []);

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
    if (county) {
      setHoverInfo({
        longitude: event.lngLat.lng,
        latitude: event.lngLat.lat,
        countyName: county.properties.COUNTY,
        income: county.properties['median-income'],
        ...county.properties,
      });
    } else {
      setHoverInfo(null);
    }
  }, []);

  const filter = useMemo(() => ['in', 'FIPS', (hoverInfo && hoverInfo.FIPS) || ''], [hoverInfo]);
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
        onMouseMove={onHover}
        onViewportChange={handleViewportChange}
        onClick={onClick}
      >
        <ControlLayer />
        <Source type="vector" url="mapbox://mapbox.82pkq93d">
          <Layer beforeId="waterway-label" {...countiesFillLayer} />
          <Layer beforeId="waterway-label" {...highlightFillLayer} filter={filter} />
        </Source>
        <Source type="vector" url="mapbox://mapbox.82pkq93d">
          <Layer beforeId="waterway-label" {...fillLayer} />
          <Layer beforeId="waterway-label" {...lineLayer} />
        </Source>
        {hoverInfo && (
          <Popup
            longitude={hoverInfo.longitude}
            latitude={hoverInfo.latitude}
            offset={[0, -15]}
            closeButton={false}
            closeOnClick={false}
            className="county-info"
          >
            <PopupCard info={hoverInfo} />
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapWrapper;
