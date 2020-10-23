import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import AudioPlayer from "./AudioPlayer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      <header>
        <div>
          <AudioPlayer></AudioPlayer>
        </div>
      </header>
      {children}
    </div>
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
