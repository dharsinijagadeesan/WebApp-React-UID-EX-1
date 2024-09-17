import React from 'react';
import './Header.css';
import userProfileImage from './profile100.png';
import homeicon from './icons-home.svg';

const Header = () => {
    
  return (
    <header className="header">
        <img src={homeicon} alt="home" className='homeicon'></img>
      <h1>QUICK TRANSLATE</h1>
      <div className="profile-icon">
        <a href="/UserProfile" title="View Profile">
          <img src={userProfileImage} alt="Profile Icon" className='profileimg'/>
        </a>
      </div>
    </header>
  );
};

export default Header;
