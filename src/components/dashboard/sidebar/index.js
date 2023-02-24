import React from 'react';

import Filter from './Filter';
import Search from './Search';

const SideBar = () => {

  return (
    <div style={{
      marginTop: '20px',
      width: '-webkit-fill-available',
      boxShadow: '0 2px 2px 0 rgba(0.2, 0.2, 0.2, 0.2)',
      padding: '0 20px'
    }}>
      {/* <Search /> */}
      <Filter />
    </div>
  )
}

export default SideBar;
