import React, { useState, useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from './../../../store/cart-context';

const MealItemForm = (props) => {
  const [formQuantity, setFormQuantity] = useState('1');
  const [amountIsValid, setAmountIsValid] = useState(true);

  const cartContext = useContext(CartContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setAmountIsValid(true);
    if (
      formQuantity.trim().length === 0 ||
      +formQuantity < 1 ||
      +formQuantity > 5
    )
      return setAmountIsValid(false);
    cartContext.addItem({
      id: 'm1',
      name: 'Sushi',
      amount: 2,
      price: 22.99,
    });
  };

  const inputValueHandler = (event) => {
    setFormQuantity(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        onChange={inputValueHandler}
        value={formQuantity}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          // min: 1,
          // max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Enterred value must be between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
