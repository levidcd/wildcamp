import React, { ReactNode } from "react";
import Head from "next/head";
import AudioPlayer from "./AudioPlayer";
import Nav from "./Nav";
import styles from "./Layout.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav></Nav>
      <div>
        {/* <AudioPlayer></AudioPlayer> */}
      </div>
    </header>
    <main className={styles.main}>{children}</main>
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
