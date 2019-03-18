import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="loc"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7627.52605000212!2d120.44752654834176!3d17.08424037347904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e1e89338d3de3%3A0x172c8ba6a89e6e2b!2sSanta+Cruz+Institute!5e0!3m2!1sen!2sph!4v1552872884785" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen
      >
      </iframe>
      <div className="location_tag">
        <div>
          Location
        </div>
      </div>
    </div>
  )
}

export default Location;