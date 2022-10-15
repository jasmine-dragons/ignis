import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import '@/styles/reset.scss';
import Navbar from '@/components/NavBar';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
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
