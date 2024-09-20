import React, { useContext } from 'react';
import { data2 } from './Project2Router';

const Bucket = () => {
  const { item, setItem } = useContext(data2);

  const removeFromCart = (id) => {
    setItem(item.filter(Item => Item.id !== id));
  };

  return (
    <center>
    <div className="bucket-container">
      <h2>Your Cart</h2>
      {item.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        item.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.product_name} />
            <div>
              <p>{item.product_name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.dollar}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
          
        ))
      )}
    </div>
    </center>
  );
};

export default Bucket;
