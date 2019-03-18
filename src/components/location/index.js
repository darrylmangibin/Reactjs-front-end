import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe 
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15255.057052590222!2d120.45304544999999!3d17.084179849999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x172c8ba6a89e6e2b!2sSanta+Cruz+Institute!5e0!3m2!1sen!2sph!4v1552885749510" 
              width="100%"
              height="500px" 
              frameBorder="0" 
              allowFullScreen
             >
             </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;