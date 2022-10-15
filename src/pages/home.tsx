import MapWrapper from '@/components/MapWrapper';
import type { NextPage } from 'next';
import style from '@/styles/pages/Home.module.scss';

const HomePage: NextPage = () => {
  return (
    <div className={style.container}>
      <MapWrapper />
    </div>
  );
};

export default HomePage;
