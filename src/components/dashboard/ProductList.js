import React from 'react';

import './index.css';
import Product from './Product';
import { getProducts } from '../../services/api';

const Dashboard = () => {
  const [products, setProducts] = React.useState([]);

  //TODO: Handle error properly, show message in toaster.
  React.useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => console.log('err:', err));
  }, []);

  return (
    <>
      {products?.products?.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};

export default Dashboard;
