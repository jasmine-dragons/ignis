import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/reset.scss';
import '../styles/globals.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ignis</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
