import React from 'react';
import footerBanner from '../../../Images/footer-banner-camp.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <img className='imgfooter' src={footerBanner} alt=''/>
        </div>
    );
};

export default Footer;