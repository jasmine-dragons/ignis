import HeroNavbar from '../components/HeroNavbar';
import style from '../styles/pages/Landing.module.scss';

const LandingPage = () => {
  return (
    <>
      <HeroNavbar />
      <main>
        <div className={style.container}>Landing</div>;
      </main>
    </>
  );
};

export default LandingPage;
