import React from 'react';

import './index.css';

const NavBar = () => {
  return (
    <div className='navbarContainer'>
      <div className='name'>The Store</div>
      <div className='navbar'>
        <ul className='nav-menu'>
          <li>Products</li>
          <li>Store Locator</li>
          <li>Offers</li>
          <li>Sale</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <div>Search</div>
      </div>
    </div>
  );
};

export default NavBar;
