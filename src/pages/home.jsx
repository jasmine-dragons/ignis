import MapWrapper from '../components/MapWrapper';
import Navbar from '../components/Navbar';
import style from '../styles/pages/Home.module.scss';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className={style.container}>
          <MapWrapper />
        </div>
      </main>
    </>
  );
};

export default HomePage;
