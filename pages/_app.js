require("../styles/globals.less");
require("../styles/less/antMotionStyle.less");

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Kinta Company</title>
        <meta key="description" name="description" content="Kinta" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
