import Marker from 'react-map-gl';

interface MarkerProps {
  latitude: number;
  longitude: number;
}

const MarkerWrapper = (props: MarkerProps) => {
  return (
    <Marker longitude={props.longitude} latitude={props.latitude}>
      <img src="Logo.svg" />
    </Marker>
  );
};
export default MarkerWrapper;
