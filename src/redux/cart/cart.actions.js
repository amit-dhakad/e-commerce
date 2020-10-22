import { ADD_ITEM, TOGGLE_CART_HIDDEN } from '../types';

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
