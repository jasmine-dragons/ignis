import { useRef, useState, useCallback, useMemo } from 'react';
import ReactMapGL, { Marker, Layer, Popup, Source } from 'react-map-gl';
import { config } from '../../lib/config';
import { locations, defaultDrawerProps } from '../../lib/constants';
import ControlLayer from '../ControlLayer';

import * as turf from '@turf/turf';

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
import { getStateLabel } from '../../lib/utils';

const MapWrapper = () => {
  const mapRef = useRef();
  const [hoverInfo, setHoverInfo] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerProps, setDrawerProps] = useState(defaultDrawerProps);
  const [markers, setMarkers] = useState([]);
  const [activeBox, setActiveBox] = useState(null);

  const handleViewportChange = useCallback(newViewport => setViewport(newViewport), []);

  const onClick = event => {
    const feature = event.features[0];
    if (feature) {
      const bounding = turf.bbox(feature);
      setActiveBox(feature);
      const [minLng, minLat, maxLng, maxLat] = bounding;

      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 40, duration: 1000 }
      );

      setShowDrawer(true);
      setDrawerProps({
        longitude: hoverInfo.longitude,
        latitude: hoverInfo.latitude,
        county: feature.properties.COUNTY,
        state: getStateLabel(feature),
        population: feature.properties.population,
        aqi: 74,
        alerts: [
          {
            title: 'Fire Danger',
            level: 'Low',
            description:
              'Fuels do not ignite easily from small embers, but from a more intense heat source, such as lightning, may start fires in duff or dry rotten wood. Fires in open, dry grasslands may burn easily a few hours after a rain, but most wood fires will spread slowly, creeping or smoldering.  Control of fires is generally easy.',
          },
          {
            title: 'Air Quality Danger',
            level: 'Moderate',
            description:
              '"Moderate" AQI is 51 - 100. Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people. For example, people who are unusually sensitive to ozone may experience respiratory symptoms. "Unhealthy for Sensitive Groups" AQI is 101 - 150.',
          },
        ],
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

  const viewAllFires = () => {
    console.log({ activeBox });
    const randArray = [];

    const numFires = Math.round(Math.random() * 5);

    for (let i = 0; i < numFires; i += 1) {
      const [long, lat] = turf.random.randomPosition(turf.bbox(activeBox));
      randArray.push({ longitude: long, latitude: lat });
    }
    setMarkers(randArray);
  };

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
        <DrawerContent {...drawerProps} viewFires={viewAllFires} />
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
        {markers.map((marker, i) => (
          <Marker key={i} {...marker}>
            <img
              src="logo.png"
              style={{
                width: 22,
                height: 40,
              }}
            />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default MapWrapper;
