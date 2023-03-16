import React from 'react';

import './index.css';
import ProductList from './ProductList';
import SideBar from './sidebar';
import { getProducts } from '../../services/api';

const Dashboard = () => {

  const [products, setProducts] = React.useState([]);

  //TODO: Handle error properly, show message in toaster.
  React.useEffect(() => {
    getProducts()
      .then(data => setProducts(data?.products))
      .catch(err => console.log('err:', err));
  }, []);

  return (
    <>
      <SideBar  />
      <div className='products'>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Dashboard;
