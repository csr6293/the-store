import React from 'react';

import './index.css';
import Product from './Product';

const ProductList = (props) => {

  const {products} = props;

  return (
    <>
      {products?.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};

export default ProductList;
