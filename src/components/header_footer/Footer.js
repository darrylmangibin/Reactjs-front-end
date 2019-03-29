import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  const year = new Date().getFullYear();
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Darryl</div>
                <div className="footer_copyright">
                    Darryl Mangibin {year}.All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;