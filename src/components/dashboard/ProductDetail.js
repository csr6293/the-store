import React from "react";
import { useParams } from 'react-router-dom';

import './index.css';
import { getProduct } from '../../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [wishlist, setWishlist] = React.useState([]);

  React.useEffect(() => {

    getProduct(id)
      .then(product => setProduct(product))
      .catch(err => console.log(err));
  },[id]);

  const addToWishlist = (newWishlist) => {
    setWishlist((prevWishlist) => [...prevWishlist, newWishlist]);

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.alert("Added to wishlist")
  }

  const addToCart = (products) => {
    // check whether the item has already added.
    localStorage.setItem('products', JSON.stringify(products));
    window.alert("Added to cart!")
  }

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
          <button onClick={() => addToCart(product)}>Add to cart</button>
          <button onClick={() => addToWishlist(product)} >Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
