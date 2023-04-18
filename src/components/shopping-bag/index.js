import React from "react";

const ShoppingBag = () => {

  const [cartItems, setCartItems] = React.useState([{}]);

  const getCartItemFromLS = () => {
    const items = localStorage.getItem('products');

    console.log('--', cartItems);

    if (items) {
      setCartItems(JSON.parse(items));
    }
  };

  React.useEffect(() => {
    getCartItemFromLS();
  }, []);

  return (
    <div>
      <div>
        <h2>Your Shopping Cart</h2>
        <div>
          {cartItems.map((item) => {
            return <div style={{
              display: 'flex',
              justifyContent: 'space-around'
            }}>
              <div style={{
                display: 'flex'
              }}>
                <img src={item.images?.[0]} alt="pic" height={'100px'} width={'100px'} />
                <div>
                <h5>{item.title}</h5>
                <h6>{item.description}</h6>
                  </div>
              </div>
              <div style={{
                display: 'flex'
              }}>

                <h5>{item.price}</h5>
              </div>
              <div>
                remove
              </div>
            </div>;
          })}

        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
