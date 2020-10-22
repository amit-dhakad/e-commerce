import { addItemToCart } from './cart.utils';

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = require('../types');

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log('default');

  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      console.log('=======================');
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
