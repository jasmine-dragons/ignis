import MapWrapper from '../components/MapWrapper';
import style from '../styles/pages/Home.module.scss';

const HomePage = () => {
  return (
    <div className={style.container}>
      <MapWrapper />
    </div>
  );
};

export default HomePage;
