import type { NextPage } from 'next';
import Link from 'next/link';

const LandingPage: NextPage = () => {
  return (
    <>
      <h1>Ignis</h1>
      <Link href="/home">Get Started</Link>
    </>
  );
};

export default LandingPage;
