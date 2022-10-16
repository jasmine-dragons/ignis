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
  // const MAPBOX_TOKEN1 =
  //   'pk.eyJ1IjoibmlzaGFudGJhbGFqaSIsImEiOiJja2xkOGl3cjcxc21yMndtdmxtZWpxeGRuIn0.isOPq2BjpvuzwjZMXW1yWA';
  // const [viewport, setViewport] = useState({
  //   latitude: 37.7577,
  //   longitude: -122.4376,
  //   zoom: 8,
  // });
  // const mapRef = useRef();
  // const handleViewportChange = useCallback(newViewport => setViewport(newViewport), []);

  // // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  // const handleGeocoderViewportChange = useCallback(newViewport => {
  //   const geocoderDefaultOverrides = { transitionDuration: 1000 };

  //   return handleViewportChange({
  //     ...newViewport,
  //     ...geocoderDefaultOverrides,
  //   });
  // }, []);

  // return (
  //   <div style={{ height: '100vh' }}>
  //     <ReactMapGL
  //       ref={mapRef}
  //       {...viewport}
  //       width="100%"
  //       height="100%"
  //       onViewportChange={handleViewportChange}
  //       mapboxApiAccessToken={MAPBOX_TOKEN1}
  //     >
  //       {mapRef.current && (
  //         <Geocoder
  //           mapRef={mapRef}
  //           onViewportChange={handleGeocoderViewportChange}
  //           mapboxApiAccessToken={MAPBOX_TOKEN1}
  //           position="top-left"
  //         />
  //       )}
  //     </ReactMapGL>
  //   </div>
  // );
  const mapRef = useRef();
  const [hoverInfo, setHoverInfo] = useState(null);
  const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';
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
    console.log(county);
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      countyName: county && county.properties.COUNTY,
      income: county && county.properties['median-income'],
      population: county && county.properties.population,
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
        onViewportChange={handleViewportChange}
        onClick={onClick}
      >
        {/* <GeocoderControl mapboxAccessToken={config.MAPBOX_TOKEN} position="top-left" /> */}
        {/* {mapRef.current && (
          <Geocoder
            mapRef={mapRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={config.MAPBOX_TOKEN}
            position="top-left"
            onClear={noop}
            onLoading={noop}
            onResults={noop}
            onResult={noop}
            onEarror={noop}
          />
        )} */}
        <ControlLayer />
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
            {/* {selectedCounty} */}
            <PopupCard info={hoverInfo} />
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapWrapper;
