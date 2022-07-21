import React from 'react';
import '../src/styles/scss/globals.scss';
import type { AppProps } from 'next/app';
import '../src/styles/scss/globals.scss';
import Navbar from '../src/components/modules/nav';
import Footer from '../src/components/modules/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
