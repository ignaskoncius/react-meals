import React, { useState } from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const [oneItemInCartQty, setOneItemInCartQty] = useState(1);
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{oneItemInCartQty}</span>
        </div>
      </div>
      <div className={classes.action}>
        <button> + </button>
        <button> - </button>
      </div>
    </li>
  );
};

export default CartItem;
