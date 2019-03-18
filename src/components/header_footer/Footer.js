import React from 'react';

import Fade from 'react-reveal/Fade';

const Footer = () => {

  const now = new Date().getFullYear()

  return (
    <footer>
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">
          The Venue
        </div>
        <div className="footer_copyright">
          The Venue {now}. All rights reserved
        </div>
      </Fade>
    </footer>
  )
}

export default Footer