import React from 'react';
import Script from 'next/script';
import RoadMap from './roadmap';
import Navbar from '../src/components/modules/nav';
import Footer from '../src/components/modules/footer';
import Category from './category/[category]';

function Home() {
  return (
    <div>
      <Script src='/js/scroll.js'></Script>
      <Navbar />
      <RoadMap />
      <Category />
      <Footer />
    </div>
  );
}

export default Home;
