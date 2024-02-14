import React from 'react';

const Location = () => {
	return (
		<div className='location_wrapper'>
			<iframe
				title='location'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1353.2890067946914!2d120.5920508185981!3d16.390289454616525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1194cefc869%3A0xf3530fdb3d98046c!2sBakakeng%20North%2C%20Baguio%2C%20Benguet!5e0!3m2!1sen!2sph!4v1707901678106!5m2!1sen!2sph'
				width='100%'
				height='500px'
				frameBorder='0'
				allowFullScreen></iframe>

			<div className='location_tag'>
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
