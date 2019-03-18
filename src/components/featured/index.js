import React from 'react';

import Carousel from './carousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">
          Darryl Mangibin
        </div>
      </div>
      <TimeUntil />
    </div>
  )
}

export default Featured;