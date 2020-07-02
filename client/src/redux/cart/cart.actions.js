import cartActionTypes from './cart.types';

export const addItemToCart = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const reduceItem = item => ({
  type: cartActionTypes.REDUCE_ITEM,
  payload: item,
});

export const getTotalPrice = () => ({
  type: cartActionTypes.GET_TOTAL_PRICE,
});
