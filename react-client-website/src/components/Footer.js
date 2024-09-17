import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='madeby'>
            <p>Made by:</p>
            <p>Dharsini J (22ITR021)</p>
        </div>
      <p>&copy;All rights reserved.</p>
      <div className='support'>
        <p>Contact :&nbsp;&nbsp; +91 6369891613</p>
        <p>Support : <a href='dharsinij@gmail.com' className='email'>dharsinij@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
