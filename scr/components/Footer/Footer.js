import React from 'react';
import Logo from '../../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <nav className='footer__nav'>
            <img className='footer__logo' src={Logo} alt='logo' />
            <NavLink to = '/' href='https://ocs.alatoo.edu.kg/' className='footer__link'>
              OCS
            </NavLink>
            <a href='https://my.alatoo.edu.kg/' className='footer__link'>
              MyAlatoo
            </a>
          </nav>
          <nav className='footer__socials'>
            <div className="flex items-center">
              <a className='instagram' href="https://www.instagram.com/alatoo.edu.kg/">
                <i className="fab fa-instagram text-xl mx-2"></i>
              </a>
              <a className='github'>
                <i className="fab fa-github text-xl mx-2"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer;
