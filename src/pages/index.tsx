import type { NextPage } from 'next';
import Link from 'next/link';
import style from '@/styles/pages/Landing.module.scss';

const LandingPage: NextPage = () => {
  return (
    <div className={style.container}>
      <h1>Ignis</h1>
      <Link href="/home">Get Started</Link>
      <div className={style.section}>
        <div>
          <h1>Title</h1>
          <p>Description</p>
        </div>
      </div>
      <div className={style.section}>stats on wildfires</div>
      <div className={style.section}>stats on damage</div>
      <div className={style.section}>Learn More</div>
    </div>
  );
};

export default LandingPage;
