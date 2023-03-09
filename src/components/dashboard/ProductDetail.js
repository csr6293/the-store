import React from "react";
import { useParams } from 'react-router-dom';

import './index.css';
import { getProduct } from '../../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {

    getProduct(id)
      .then(product => setProduct(product))
      .catch(err => console.log(err));
  },[id]);

  console.log('product', product);

  return (
    <div className="product-details">
      <div style={{
        width: '30%'
      }}>
        <h3>{product.title}</h3>
        <h4>{product.brand}</h4>
        <h4>{product.category}</h4>
        <h4>{product.rating}</h4>
        <p>{product.description}</p>
      </div>
      <div>
        <img style={{
          marginTop: '20px'
        }} src={product?.images?.[0]} alt={`Pic of id: ${id}`} />
      </div>
      <div>
        <h3>${product.price}</h3>
        <div>
          <button>Add to cart</button>
          <button>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
