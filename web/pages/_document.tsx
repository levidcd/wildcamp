import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/woff/FiraCode-Regular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/YSHaoShenTi.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/优设标题黑.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;