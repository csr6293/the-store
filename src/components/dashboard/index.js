import React from 'react';

import SideBar from './sidebar';
import { getProducts } from '../../services/api';

const Dashboard = () => {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const products = getProducts();

    console.log('pform indexp', products)

    setProducts(products);
  }, []);

  return (
    <div>
      {products?.products?.map((product) => (
        <div>
          <div>{product.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
