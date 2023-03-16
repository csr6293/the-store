import React from 'react';

import './index.css';
import ProductList from './ProductList';
import SideBar from './sidebar';

const Dashboard = () => {

  return (
    <>
      <SideBar />
      <div className='products'>
        <ProductList />
      </div>
    </>
  );
};

export default Dashboard;
