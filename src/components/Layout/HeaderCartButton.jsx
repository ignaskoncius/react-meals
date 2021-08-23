import { useContext } from 'react';
import CartIcon from './../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from './../../store/cart-context';

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  );

  return (
    <button onClick={onShowCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
