import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/reset.scss';
import '../styles/globals.scss';
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ignis</title>
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
