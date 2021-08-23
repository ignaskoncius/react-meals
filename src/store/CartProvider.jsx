import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // arba if arba switch
  switch (action.type) {
    case 'ADD': {
      // visa pridejimo i krepseli logika ir grazinti nauja sate versija
      // 2 keliai
      const { item } = action;
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;
      //// 1a itemas jau yra krepselyje mes norim padinti jo kiieki ir totalAmount
      const existingCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        //// 2a itemo nera krepsely mes ji idedam
        updatedItems = [...state.items, item];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE':
      const existingCartItem = state.items.find(
        (cartItem) => cartItem.id === action.id
      );

      let updatedItems;
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      if (existingCartItem.amount > 1) {
        updatedItems = state.items.map((cartItem) => {
          if (cartItem.id === action.id)
            return { ...cartItem, amount: cartItem.amount - 1 };
          return cartItem;
        });
      } else if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter(
          (cartItem) => cartItem.id !== action.id
        );
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
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
