import "normalize.css";
import './_app.scss';
// import './antd-var.less'
import "antd/dist/antd.less";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
