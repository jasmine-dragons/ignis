import MAP_STYLE from './MapStyles.json';

// const usCounties = {
//   type: 'geojson',
//   data: 'data/counties.geojson',
// };

export const fillLayer = {
  id: 'county-fill',
  'source-layer': 'original',
  type: 'fill',
  paint: {
    'fill-outline-color': '#0040c8',
    'fill-color': '#fff',
    'fill-opacity': 0,
  },
};

export const lineLayer = {
  id: 'county-outline',
  source: 'county-fill',
  'source-layer': 'original',

  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#555',
  },
};

export const countiesFillLayer = {
  id: 'counties',
  type: 'fill',
  'source-layer': 'original',
  paint: {
    'fill-outline-color': 'rgba(0,0,0,0.1)',
    'fill-color': 'rgba(0,0,0,0.03)',
  },
};
// Highlighted county polygons
export const highlightFillLayer = {
  id: 'counties-highlighted',
  type: 'fill',
  source: 'counties',
  'source-layer': 'original',
  paint: {
    'fill-outline-color': '#484896',
    'fill-color': '#6e599f',
    'fill-opacity': 0.75,
  },
};

// Make a copy of the map style
const BorderStyles = {
  ...MAP_STYLE,
  sources: {
    ...MAP_STYLE.sources,
    // ['us-counties']: usCounties,
  },
  layers: [...MAP_STYLE.layers],
};

export default BorderStyles;
