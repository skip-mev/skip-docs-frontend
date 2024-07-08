import "../styles/globals.css";
import "@fontsource/inconsolata";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode, useState } from "react";
import MainLayout from "../components/MainLayout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps &
  {
    Component: NextPageWithLayout;
  };

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(
    <>
      <Head>
        <title>Skip – Docs</title>
        <meta
          name="description"
          content="Skip sovereign MEV solutions for sovereign blockchain communities."
        ></meta>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}