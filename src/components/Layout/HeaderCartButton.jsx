import { useContext, useEffect, useState } from 'react';
import CartIcon from './../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from './../../store/cart-context';

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const [btnBumpAdded, setBtnBumpAdded] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnBumpAdded ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnBumpAdded(true);
    const timer = setTimeout(() => {
      setBtnBumpAdded(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button onClick={onShowCart} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
