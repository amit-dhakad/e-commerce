import {
  ADD_ITEM,
  CLEAR_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from '../types';

export const toggleCartHidden = () => {
  console.log('==========action');
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
