import React from 'react';
import './UserProfile.css';

export default function UserProfile({ name, email, phone, imgsrc }) {
  return (
    <div className="top">
    <h1 className='heading'><center>LANGUAGE TRANSLATOR</center></h1>
    <div className="container">
      <div className="profile-box">
        <img src={imgsrc} alt="profile" />
        <label>{name}</label>
        <label>{email}</label>
        <label>{phone}</label>
        <button>My Account</button>
        <button>Sign Out</button>
      </div>
    </div>
    </div>
  );
}
