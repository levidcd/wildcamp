import "normalize.css";
// import './antd-var.less'
import "antd/dist/antd.less";
import './_app.scss';

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
