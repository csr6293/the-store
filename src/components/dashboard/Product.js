import React from "react";

const Product = (props) => {
  const {product} = props;

  return (
    <div className='product'>
      <img src={product?.images[0]} alt='product' />
      <div style={{
        padding: '20px'
      }}>
        <h3>{product.title}</h3>
        <p className='price'>$ {product.price}</p>
        <div>{product.brand}</div>
      </div>
    </div>
  );
};

export default Product;
