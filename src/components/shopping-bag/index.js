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
        <div style={{
          width: '90%',
          margin: '0 auto',
          backgroundColor: 'aliceblue',
          padding: '20px',
          borderRadius: '5px'
        }}>
          {cartItems.map((item) => {
            return <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '20px 0',
              backgroundColor: '#f8f5f1',
              padding: '10px 0'
            }}>
              <div style={{
                display: 'flex'
              }}>
                <img src={item.images?.[0]} alt="pic" height={'100px'} width={'100px'} />
                <div style={{
                  margin: '0 20px'
                }}>
                  <h5>{item.title}</h5>
                  <h6 style={{
                    fontWeight: '500'
                  }}>{item.description}</h6>
                </div>
              </div>
              <div style={{
                display: 'flex'
              }}>

                <h5>${item.price}</h5>
              </div>
              <div style={{
                display: 'flex'
              }}>
                <div>
                  +
                </div>
                1
                <div>
                  -
                </div>
              </div>
              <div>
                remove
              </div>

            </div>;
          })}
          <button style={{
            height: '40px',
            width: '200px',
            borderRadius: '13px',
            backgroundColor: 'steelblue',
            color: 'white',
            float: 'right'
          }}>Checkout</button>
        </div>


      </div>
    </div>
  );
};

export default ShoppingBag;
