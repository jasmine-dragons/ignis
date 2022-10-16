import styles from './style.module.scss';
import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaMountain } from 'react-icons/fa';
import { SiWindicss } from 'react-icons/si';

const PopupCard = ({ info }) => {
  if (!info) {
    return null;
  }

  const city = info.countyName;
  const income = info.income;
  const population = info.population;

  const [thumbnail, setThumbnail] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${city}&client_id=av0absFqo8bnAh5OryvyoEk8c_85raTu3m4ld8md-c4`
      )
      .then(res => setThumbnail(res.data.results[2].urls.small))
      .catch(err => console.log(err));
  }, [city]);

  return (
    <div className={styles.container}>
      <div className={styles.headerImage}>
        <div className={styles.imageContainer}>
          <img src={thumbnail} alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{city}</h1>
        <h2 className={styles.subtitle}>{info.stateName}, United States</h2>
        <span className={styles.info}>
          <BsPeopleFill size={12} />
          {population && population.toLocaleString('en-US')} people
        </span>
        <span className={styles.info}>
          <FaMountain size={12} />
          {(population * 0.000000856).toLocaleString('en-US')} million acres
        </span>
        <span className={styles.info}>
          <SiWindicss size={12} />
          48 AQI &middot; Good{' '}
        </span>
        <span className={styles.cta}>Click Region to Learn More</span>
        {/* BsPeopleFill */}
        {/* FaMountain */}
        {/* SiWindicss */}
      </div>
    </div>
  );
};

export default memo(PopupCard);
