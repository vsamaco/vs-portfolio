import "bootstrap/dist/css/bootstrap.css";
import "@/styles/css/elegantIcons.css";
import "@/styles/css/icofont.css";
import "@/styles/scss/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
