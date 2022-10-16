import { useRef, useState, useCallback, useMemo } from 'react';
import ReactMapGL, { Marker, Layer, Popup, Source } from 'react-map-gl';
import { config } from '../../lib/config';
import { locations, defaultDrawerProps } from '../../lib/constants';
import ControlLayer from '../ControlLayer';
import bbox from '@turf/bbox';
import BorderStyles, {
  countiesFillLayer,
  highlightFillLayer,
  lineLayer,
  fillLayer,
} from '../MapStyles/BorderStyles';
import PopupCard from '../PopupCard';

import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';
import DrawerContent from '../DrawerContent';
import { getStateLabel, getThumbnail } from '../../lib/utils';

const MapWrapper = () => {
  const mapRef = useRef();
  const [hoverInfo, setHoverInfo] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerProps, setDrawerProps] = useState(defaultDrawerProps);

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

      console.log({ feature });
      setShowDrawer(true);
      setDrawerProps({
        county: feature.properties.COUNTY,
        state: getStateLabel(feature),
        population: feature.properties.population,
        aqi: 48,
        alerts: [],
      });
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
        stateName: getStateLabel(county),
      });
    } else {
      setHoverInfo(null);
    }
  }, []);

  const filter = useMemo(() => ['in', 'FIPS', (hoverInfo && hoverInfo.FIPS) || ''], [hoverInfo]);
  return (
    <div>
      <Drawer
        style={{
          width: 472,
        }}
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        direction="left"
      >
        <DrawerContent {...drawerProps} />
      </Drawer>
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
        <Marker longitude={-100} latitude={40} anchor="bottom">
          <img src="logo.svg" />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default MapWrapper;
