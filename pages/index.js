import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";
import Head from "next/head";
import Reasons from "./components/Reasons/Reasons";
import Partners from "./components/Partners/Partners";
import Highlight from "./components/Highlight/Highlight";
import Introduction from "./components/Introduction/Introduction";
import Newsletter from "./components/Newsletter/Newsletter";
import Infos from "./components/Infos/Infos";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert";

export default function Home() {

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="./logo.png" />
        <title>Maeztra - Loja Online</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Loja online Maeztra - As melhores roupas para o melhor estilo"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style global jsx>{`
        body {
          background-color: #fafafa;
        }
      `}</style>

      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
        }}
      >

        <Header />
        <Banner />
        <Reasons />
        <Partners />
        <Highlight />
        <Introduction />
        <Newsletter />
        <Infos />
        <Footer />
      </Box>
    </>
  );
}
