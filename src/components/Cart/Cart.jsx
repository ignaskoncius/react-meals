import classes from './Cart.module.css';
import Modal from './../UI/Modal';
import CartContext from './../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = ({ onCloseCart }) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items.map((item) => (
    <CartItem item={item} key={item.id} />
  ));

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const cartHasItems = cartContext.items.length > 0;

  return (
    <Modal onCloseCart={onCloseCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCloseCart} className={classes['button--alt']}>
          Close
        </button>
        {cartHasItems && <button className={classes['button']}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
