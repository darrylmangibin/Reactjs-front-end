import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class portfolio extends Component {
	state = {
		name: [
			"React",
			"React",
			"React",
			"React",
			"CSS",
			"Front-End",
			"Front-End",
			"Front-End",
			"Front-End",
			"Github",
		],
		items: [
			"Expensify",
			"Social Media for developers",
			"Pure React Javascript",
			"Guitar Website",
			"CSS and SASS with animations",
			"Asphalt-legends",
			"Disney princess majestic quest",
			"Getawayblast",
			"Asphalt eSports",
			"Minion rush",
            "Lego legacy",
            "Over Drive City",
			"Github Repository",
		],
		desc: [
			"CRUD Application for your expenses. You can list down all your expenses. Back end - Firebase",

			"CRUD Application like facebook. You can register, login and delete your account. Also you can create comments or delete them and can view profiles registered user. Back end - MongoDB Node(express)",

			"Application that can decide your what to do. It is a simple React application",

			"Ecom site - Have an Admin use that can create his/her items to sell and can edit items. Back end - Node(express) MongoDB",

			"A Pure Css with Sass. Animation are all css no javascript involve",

			"These are some of the projects in Gameloft and I am part of building as a Front-end developer",

			"These are some of the projects in Gameloft and I am part of building as a Front-end developer",

			"These are some of the projects in Gameloft and I am part of building as a Front-end developer",

			"These are some of the projects in Gameloft and I am part of building as a Front-end developer",

			"These are some of the projects in Gameloft and I am part of building as a Front-end developer",

            "These are some of the projects in Gameloft and I am part of building as a Front-end developer",
            
            "These are some of the projects in Gameloft and I am part of building as a Front-end developer",

			"You can view my activities or source code of all my projects in my Github",
		],
		linkto: [
			"https://fierce-thicket-60455.herokuapp.com/",
			"https://vivixx-dev.herokuapp.com/profile/darryl",
			"http://inquisitive-pollution.surge.sh/",
			"https://nameless-ocean-14676.herokuapp.com/",
			"https://darrylmangibin.github.io/CSS-SASS-/",
			"https://www.asphaltlegends.com/",
			"https://www.gameloft.com/disneyprincess-majesticquest/en/",
			"http://www.gameloft.com/en/game/disneygetawayblast/",
			"https://www.asphaltesports.com/en/",
            "https://minionrush.com/",
            "https://www.legolegacy.com/",
            "https://www.gameloft.com/en/game/overdrive-city",
			"https://github.com/darrylmangibin",
		],
		sourceCode: [
			"https://github.com/darrylmangibin/React-expensify",
			"https://github.com/darrylmangibin/dev-connector-mern",
			"https://github.com/darrylmangibin/Reactjs-indecsion-app-v2",
			"https://github.com/darrylmangibin/waves",
			"https://github.com/darrylmangibin/CSS-SASS-",
			"https://github.com/darrylmangibin/Reactjs-front-end",
		],
		delay: [500, 0, 500, 500, 500],
	};

	showBoxes = () =>
		this.state.name.map((box, i) => (
			<Zoom delay={this.state.delay[i]} key={i}>
				<div className="portfolio_item">
					<div className="portfolio_inner_wrapper">
						<div className="portfolio_title">
							<span>{this.state.name[i]}</span>
							<span>{this.state.items[i]}</span>
						</div>
						<div className="portfolio_description">
							{this.state.desc[i]}
							<br />
							<a
								style={{
									color: "#fff",
								}}
								href={this.state.sourceCode[i]}
								target="_blank"
							>
								View Source Code
							</a>
						</div>
						<div className="portfolio_buttons">
							<MyButton
								text="Visit URL"
								bck="#ffa800"
								color="#ffffff"
								link={this.state.linkto[i]}
							/>
						</div>
					</div>
				</div>
			</Zoom>
		));

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper portfolio_section">
					<h2>Portfolio</h2>

					<div className="portfolio_wrapper">{this.showBoxes()}</div>
				</div>
			</div>
		);
	}
}

export default portfolio;