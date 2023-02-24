import React from 'react';

import Filter from './Filter';
import Search from './Search';

const SideBar = () => {

  return (
    <div style={{
      marginTop: '20px'
    }}>
      <Search />
      <Filter />
    </div>
  )
}

export default SideBar;
