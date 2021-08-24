require("../styles/globals.less");
require("../styles/less/antMotionStyle.less");
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports.js";
import Head from "next/head";

Amplify.configure(awsconfig);

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
