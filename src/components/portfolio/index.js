import React, { useState } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

const Portfolio = () => {
	const [state] = useState({
		name: [
			'React',
			'React',
			'React',
			'React',
			'MERN',
			'Node',
			'CSS',
			'Ruby on rails',
			'Github',
			'Front-End',
			'Front-End',
			'Front-End',
			'Front-End',
			'Front-End',
			'Front-End',
			'Front-End',
			'Node',
		],
		items: [
			'Expensify',
			'Social Media for developers',
			'Pure React Javascript',
			'Guitar Website',
			'Bao Shop',
			'Node Api',
			'CSS and SASS with animations',
			'Ruby on rails(CRUD APP)',
			'Github Repository',
			'Asphalt-legends',
			'Disney princess majestic quest',
			'Getawayblast',
			'Asphalt eSports',
			'Minion rush',
			'Lego legacy',
			'Over Drive City',
			'Node and Prisma',
		],
		desc: [
			'CRUD Application for your expenses. You can list down all your expenses. Back end - Firebase',

			'CRUD Application like facebook. You can register, login and delete your account. Also you can create comments or delete them and can view profiles registered user. Back end - MongoDB Node(express)',

			'Application that can decide your what to do. It is a simple React application',

			'Ecom site - Have an Admin use that can create his/her items to sell and can edit items. Back end - Node(express) MongoDB',

			'Ecom site - Simple Ecom site using React redux hooks and Node for the back end',

			'Node Api - Reference for node projects',

			'A Pure Css with Sass. Animation are all css no javascript involve',

			"Application that deals crup operation(Simple, take not that I didn't have styling. The aim is to show Rails functionality)",

			'You can view my activities or source code of all my projects in my Github',

			'These are some of the projects in Gameloft and I am part of building as a Front-end developer',

			'These are some of the projects in Gameloft and I am part of building as a Front-end developer',

			'These are some of the projects in Gameloft and I am part of building as a Front-end developer',

			'These are some of the projects in Gameloft and I am part of building as a Front-end developer',

			'These are some of the projects in Gameloft and I am part of building as a Front-end developer',

			'These are some of the projects in Gameloft and I am part of building as a Front-end developer',

			'These are some of the projects in Gameloft and I am part of building as a Front-end developer',
			'Sample code for Node and Prisma using typescript and with jest for unit and integration test',
		],
		linkto: [
			'https://fierce-thicket-60455.herokuapp.com/',
			'https://vivixx-dev.herokuapp.com/profile/darryl',
			'http://inquisitive-pollution.surge.sh/',
			'https://nameless-ocean-14676.herokuapp.com/',
			'https://baoshop.herokuapp.com/',
			'',
			'https://darrylmangibin.github.io/CSS-SASS-/',
			'https://fathomless-bayou-60436.herokuapp.com/',
			'https://github.com/darrylmangibin',
			'https://www.asphaltlegends.com/',
			'https://www.gameloft.com/disneyprincess-majesticquest/en/',
			'http://www.gameloft.com/en/game/disneygetawayblast/',
			'https://www.asphaltesports.com/en/',
			'https://minionrush.com/',
			'https://www.legolegacy.com/',
			'https://www.gameloft.com/en/game/overdrive-city',
			'https://github.com/darrylmangibin/Node-prisma-ts-jest',
		],
		sourceCode: [
			'https://github.com/darrylmangibin/React-expensify',
			'https://github.com/darrylmangibin/dev-connector-mern',
			'https://github.com/darrylmangibin/Reactjs-indecsion-app-v2',
			'https://github.com/darrylmangibin/waves',
			'https://github.com/darrylmangibin/mern-ecommerce',
			'https://github.com/darrylmangibin/NODE_API',
			'https://github.com/darrylmangibin/CSS-SASS-',
			'https://github.com/darrylmangibin/recipe',
			'https://github.com/darrylmangibin/',
			'https://github.com/darrylmangibin/Node-prisma-ts-jest',
		],
		delay: [500, 0, 500, 500, 500],
	});

	const showBoxes = () =>
		state.name.map((box, i) => (
			<Zoom delay={state.delay[i]} key={i}>
				<div className='portfolio_item'>
					<div className='portfolio_inner_wrapper'>
						<div className='portfolio_title'>
							<span>{state.name[i]}</span>
							<span>{state.items[i]}</span>
						</div>
						<div className='portfolio_description'>
							{state.desc[i]}
							<br />
							<a
								style={{
									color: '#fff',
								}}
								href={state.sourceCode[i]}
								target='_blank'
							>
								View Source Code
							</a>
						</div>
						<div className='portfolio_buttons'>
							<MyButton
								text='Visit URL'
								bck='#ffa800'
								color='#ffffff'
								link={state.linkto[i]}
							/>
						</div>
					</div>
				</div>
			</Zoom>
		));

	return (
		<div className='bck_black'>
			<div className='center_wrapper portfolio_section'>
				<h2>Portfolio</h2>
				<div className='portfolio_wrapper'>{showBoxes()}</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					padding: '60px',
				}}
			>
				<MyButton
					text='View resume'
					bck='#ffa800'
					color='#ffffff'
					target='_blank'
					link='https://darrylmangibin.github.io/pdf/cv.pdf'
				/>
			</div>
		</div>
	);
};

export default Portfolio;
