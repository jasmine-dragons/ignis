import type { NextPage } from 'next';
import Link from 'next/link';
import style from '@/styles/pages/Landing.module.scss';

const LandingPage: NextPage = () => {
  return (
    <div className={style.container}>
      <h1>Ignis</h1>
      <Link href="/home">Get Started</Link>
    </div>
  );
};

export default LandingPage;
