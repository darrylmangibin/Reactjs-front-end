import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlight from './components/highlights';
import Portfolio from './components/portfolio';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Header />

				<Element name='featured'>
					<Featured />
				</Element>

				<Element name='venuenfo'>
					<VunueNfo />
				</Element>

				<Element name='goals'>
					<Highlight />
				</Element>

				<Element name='portfolio'>
					<Portfolio />
				</Element>

				<Element name='location'>
					<Location />
				</Element>

				<Footer />
			</div>
		);
	}
}

export default App;
