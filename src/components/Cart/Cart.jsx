import classes from './Cart.module.css';
import Modal from './../UI/Modal';
import CartContext from './../../store/cart-context';
import { useContext } from 'react';

const Cart = ({ onCloseCart }) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));
  return (
    <Modal onCloseCart={onCloseCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCloseCart} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes['button']}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
