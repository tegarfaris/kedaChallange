import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@kedachallange/app/layouts";
import "@kedachallange/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Tegar ERP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tegar - ERP" />
        <meta property="og:title" content="Tegar - ERP" />
        <meta
          property="og:description"
          content="Tegar ERP is the biggest ERP corp in the world"
        />
        <meta property="og:image" content="/assets/hero-illustration.svg" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <ChakraProvider>
        {!Component.getLayout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ChakraProvider>
    </>
  );
}

export default App;
