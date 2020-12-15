import React from "react";
import Head from "next/head";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/fonts.css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const theme = {};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Calcuratio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
