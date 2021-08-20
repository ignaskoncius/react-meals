import React, { useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [formQuantity, setFormQuantity] = useState(1);

  const formSubmitHandler = (event) => {
    event.preventDefault();
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
          min: 1,
          max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
