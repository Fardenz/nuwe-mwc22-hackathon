/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Layout = (props) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
