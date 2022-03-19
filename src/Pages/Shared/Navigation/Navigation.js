import React from 'react';
import Logo from '../../../Images/P-Logo.png';
import './Navigation.css';
import TimeDate from './TimeDate';


const Navigation = () => {
  return (
    <div>
      <img className='logo' src={Logo} alt=''/>
      <TimeDate></TimeDate>
    </div>
  );
};

export default Navigation;