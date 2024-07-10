import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToSignUp = () => {
    navigate('/signup');
  };
  const navigateToSignIn = () => {
    navigate('/signin');
  };
  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <header className={style.header}>
        <div className={style.logo}>
          <h3>Amazing<span> Influencers</span></h3>
        </div>
        <div className={`${style.namefields} ${menuOpen ? style.show : ''}`}>
          <span  onClick={navigateToHome}>Home</span>
          <span >About Us</span>
          <span>Service</span>
          <span>Get in Touch</span>
        </div>
        <div className={`${style.buttons} ${menuOpen ? style.show : ''}`}>
          <button className={style.loginbutton} onClick={navigateToSignIn}>Login</button>
          <button className={style.signupbutton} onClick={navigateToSignUp}>Sign Up</button>
        </div>
        <button className={style.mobilemenubutton} onClick={toggleMenu}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>
    </div>
  );
};

export default Header;
