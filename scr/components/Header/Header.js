import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Login from '../../components/Login/Login'
import './Header.scss';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../../pages/Cart/Cart';

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Default value is false, assuming the user is initially not logged in

  const navigate = useNavigate();
  const location = useLocation();

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleAdminLoginClick = () => {
    if (isAdminLoggedIn) {
      // User is logged in, perform logout action
      setIsAdminLoggedIn(false);
    } else {
      // User is not logged in, show login form
      setIsShown(!isShown);
    }
  };
  

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const isAdminRoom = location.pathname === '/admin'; // Check if the current location is the admin room

  return (
    <div className='header'>
      <div className='header__wrapper'>
        {!isAdminRoom && (
          <nav className='header__nav'>
            <NavLink to='/' className='header__link header__link--hover'>Home</NavLink>
            <NavLink to='/about' className='header__link header__link--hover'>About</NavLink>
            <NavLink to='/contacts' className='header__link header__link--hover'>Contacts</NavLink>
          </nav>
        )}

        <nav className='header__nav-r'>
          <button onClick={() => navigate('/cart')} className='header__cart'>
            <FaShoppingCart className='header__cart-icon' />
            {cartItems.length > 0 && <span className='header__cart-count'>{cartItems.length}</span>}
            {/* <div className='cart--counter'>0</div> */}
          </button>
         <button onClick={handleAdminLoginClick} className='header__login'>
  {isAdminLoggedIn ? 'Log out' : 'Admin'}
</button>

        </nav>
      </div>

      {isShown && !isAdminLoggedIn && (
        <Login
          onClose={handleAdminLoginClick}
          setIsShown={setIsShown}
          setIsAdminLoggedIn={setIsAdminLoggedIn}
        />
      )}
      {isCartOpen && <Cart cartItems={cartItems} />}
    </div>
  );
};

export default Header;
