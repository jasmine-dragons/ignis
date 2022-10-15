import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import '@/styles/reset.scss';
import Navbar from '@/components/NavBar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
