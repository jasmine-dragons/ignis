import style from './style.module.scss';
import { BsPeopleFill } from 'react-icons/bs';
import { FaMountain } from 'react-icons/fa';
import { SiWindicss } from 'react-icons/si';
import moment from 'moment';
import { calcAqiLabel, getThumbnail } from '../../lib/utils';
import { useEffect, useState } from 'react';

const Tag = ({ src, description }) => {
  return (
    <div className={style.tag}>
      <img src={src} alt={description} />
      <span>{description}</span>
    </div>
  );
};

const Alert = ({ title, level, description }) => {
  return (
    <div className={style.tips}>
      <h1 className={style.title}>
        <img src="" alt="" />
        <span>
          {title}: {level}
        </span>
      </h1>
      <p className={style.desc}>{description}</p>
    </div>
  );
};

const DrawerContent = ({ county, state, population, aqi, alerts }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    getThumbnail(county).then(res => setImageSrc(res));
  }, [county]);

  const country = 'United States';

  const date = moment().format('MMM Do');
  const time = moment().format('h:mm a');

  const households = Math.round(population / 4);
  const acres = population * 0.000000856;

  return (
    <div className={style.container}>
      <div className={style.top}>
        <Tag src="pin.png" description="San Diego, CA, United States" />
        <div className={style.row}>
          <Tag src="cal.png" description={date} />
          <Tag src="clock.png" description={time} />
        </div>
        <div className={style.right}>
          <button className={style.viewFire}>View Active Fires &#8594;</button>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img src={imageSrc} alt="" />
      </div>
      <div className={style.scrollable}>
        <div className={style.details}>
          <h1 className={style.title}>{county}</h1>
          <h2 className={style.subtitle}>
            {state}, {country}
          </h2>
          <p className={style.info}>
            <BsPeopleFill size={22} color="#ff7100" />
            {population && population.toLocaleString('en-US')} people &middot;{' '}
            {households && `${households.toLocaleString('en-US')} households`}
          </p>
          <p className={style.info}>
            <FaMountain size={22} color="#ff7100" />
            {acres.toLocaleString('en-US')} million acres
          </p>
          <p className={style.info}>
            <SiWindicss size={22} color="#ff7100" />
            {aqi} AQI &middot; {calcAqiLabel(aqi)}
          </p>
          <p className={style.more}>
            Air quality is {aqi}, which is similar to yesterday's air quality around this time.
          </p>
        </div>
        {alerts.map((alert, i) => (
          <Alert key={`${alert.title}-${i}`} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default DrawerContent;
