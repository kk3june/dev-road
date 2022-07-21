import React from 'react';
import Script from 'next/script';
import RoadMap from './roadmap';

function Home() {
  return (
    <div>
      <Script src='/js/scroll.js'></Script>
      <RoadMap />
    </div>
  );
}

export default Home;
