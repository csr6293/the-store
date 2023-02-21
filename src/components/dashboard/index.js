import React from 'react';

import './index.css';
import SideBar from './sidebar';
import { getProducts } from '../../services/api';

const Dashboard = () => {

  const [products, setProducts] = React.useState([]);

  //TODO: Handle error properly, show message in toaster.
  React.useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => console.log('eee', err));
  }, []);

  return (
    <div className='products'>
      {products?.products?.map((product) => (
        <div className='product'>
          <div>{product.title}</div>
          <div>{product.brand}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
