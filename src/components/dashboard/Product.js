import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  return (
    <div className='product' onClick={() => navigate(`/products/${product.id}`)}>
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
