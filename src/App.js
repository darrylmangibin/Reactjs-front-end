import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueinfo';
import Hightlights from './components/highlights';


class App extends Component {
  render() {
    return (
      <div style={{ height: '1500px', background: 'cornflowerblue'}}>
        <Header />
        <Featured />
        <VenueInfo />
        <Hightlights />
      </div>
    );
  }
}

export default App;
