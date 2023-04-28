import React, { useState } from 'react';
import Logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import './Header.scss';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin); // toggle the value of showLogin
  };

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <NavLink to='/' href='' className='header__link'>
            <img className='header__logo' src={Logo} alt='logo' />
          </NavLink>
          <nav className='header__nav'>
            <NavLink to='/' className='header__link'>
              Home
            </NavLink>
            <NavLink to='/products' className='header__link'>
              Products
            </NavLink>
            {/* <NavLink to="/payment" className='header__link'>Payment</NavLink> */}
            <NavLink to='/contacts' className='header__link'>
              Contacts
            </NavLink>
          </nav>
          <nav className='header__nav-l'>
            <button onClick={handleLoginClick} className='header__login'>
              Login
            </button>
          </nav>
        </div>
      </div>
      {showLogin && (
        <div className='modal-overlay'>
          <Login onClose={handleLoginClick} />
        </div>
      )}
    </div>
  );
};

export default Header;
