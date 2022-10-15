import type { AppProps } from "next/app";
import "@/styles/reset.scss";
import "@/styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
