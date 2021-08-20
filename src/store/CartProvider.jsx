import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // arba if arba switch
  switch (action.type) {
    case 'ADD':
      // console.log(state.items);
      console.log(action.item);
      const isItemInCart = state.items.filter((item) => {
        if (item.id === action.item.id) {
          state.totalAmount++;
        }
      });
      // visa pridejimo i krepseli logika ir grazinti nauja state versija
      const { item } = action;
      const updatedItems = [...state.items, item];
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;
      console.log(updatedItems);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'REMOVE':
      throw new Error('Remove item not completed');
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
