import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

const NavBar = () => {
  const navigate = useNavigate();

  const navigateTo = (url = '/') => {
    return navigate(url);
  };

  return (
    <div className='navbarContainer'>
      <div className='name'>
        <div id='name' onClick={() => navigateTo('/')}>The Store</div>
        <div className='user-options'>
          <div>Login</div>
          <div onClick={() => navigateTo('/wishlist')}>Wishlist</div>
          <div onClick={() => navigateTo('/cart')}>Shopping Bag</div>
        </div>
      </div>
      <div className='navbar'>
        <ul className='nav-menu'>
          <li onClick={() => navigateTo()}>Products</li>
          <li onClick={() => navigateTo('/locations')}>Store Locator</li>
          <li style={{
            textDecoration: 'line-through'
          }} onClick={() => navigateTo('/offers')}>Offers</li>
          <li style={{
            textDecoration: 'line-through'
          }} onClick={() => navigateTo('/sales')}>Sale</li>
          <li>About us</li>
          <li onClick={() => navigateTo('/contact-us')}>Contact us</li>
        </ul>
        <div>
          <input className='search-bar' type={'text'} placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
