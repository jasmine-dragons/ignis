import { NavigationControl, GeolocateControl } from 'react-map-gl';
const ControlLayer = () => {
  return (
    <>
      <NavigationControl position="bottom-right" />
      <GeolocateControl position="bottom-right" trackUserLocation />
    </>
  );
};
export default ControlLayer;
