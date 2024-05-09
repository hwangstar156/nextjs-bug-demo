import Script from "next/script";

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://cdn.jsdelivr.net/npm/react-query@3.39.3/dist/react-query.production.min.js" />
        {/* 
          this script is working
          <Script src="https://cdn.jsdelivr.net/npm/react-query@3.39.3/dist/react-query.production.min.js" strategy="afterInteractive"/>
        */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
