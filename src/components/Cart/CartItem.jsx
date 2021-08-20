import React, { useState } from 'react';

const CartItem = ({ item }) => {
  const [oneItemInCartQty, setOneItemInCartQty] = useState(1);
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{oneItemInCartQty}</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default CartItem;
