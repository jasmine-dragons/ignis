import styles from './style.module.scss';
import { memo, useEffect, useState } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaMountain } from 'react-icons/fa';
import { SiWindicss } from 'react-icons/si';
import { calcAqiLabel, getThumbnail } from '../../lib/utils';

const PopupCard = ({ info }) => {
  if (!info) {
    return null;
  }

  const county = info.countyName;
  const state = info.stateName;
  const country = 'United States';
  const population = info.population;
  const acres = population * 0.000000856;
  const households = Math.round(population / 4);
  const aqi = 48;

  const [thumbnail, setThumbnail] = useState('');
  useEffect(() => {
    getThumbnail(county)
      .then(res => setThumbnail(res))
      .catch(err => console.error(err));
  }, [county]);

  return (
    <div className={styles.container}>
      <div className={styles.headerImage}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{county}</h1>
        <h2 className={styles.subtitle}>
          {state}, {country}
        </h2>
        <span className={styles.info}>
          <BsPeopleFill size={12} />
          {population && population.toLocaleString('en-US')} people &middot;
          {households && `${households.toLocaleString('en-US')} households`}
        </span>
        <span className={styles.info}>
          <FaMountain size={12} />
          {acres.toLocaleString('en-US')} million acres
        </span>
        <span className={styles.info}>
          <SiWindicss size={12} />
          {aqi} AQI &middot; {calcAqiLabel(aqi)}
        </span>
        <span className={styles.cta}>Click Region to Learn More</span>
      </div>
    </div>
  );
};

export default memo(PopupCard);
