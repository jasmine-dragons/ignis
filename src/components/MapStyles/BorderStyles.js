import MAP_STYLE from './MapStyles.json';

const usCounties = {
  type: 'geojson',
  data: 'data/counties.geojson',
};

const fillLayer = {
  id: 'county-fill',
  source: 'us-counties',
  type: 'fill',
  paint: {
    'fill-outline-color': '#0040c8',
    'fill-color': '#fff',
    'fill-opacity': 0,
  },
};

const lineLayer = {
  id: 'county-outline',
  source: 'us-counties',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#969696',
  },
};

// Make a copy of the map style
const BorderStyles = {
  ...MAP_STYLE,
  sources: {
    ...MAP_STYLE.sources,
    ['us-counties']: usCounties,
  },
  layers: [...MAP_STYLE.layers, fillLayer, lineLayer],
};

export default BorderStyles;
