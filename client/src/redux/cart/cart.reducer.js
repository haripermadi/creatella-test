import cartActionTypes from './cart.types';
import {addToCart, totalPrice} from '../../helper';

const INITIAL_STATE = {
  carts: [],
  total: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        carts: addToCart(state.carts, action.payload),
      };

    case cartActionTypes.GET_TOTAL_PRICE:
      return {
        ...state,
        total: totalPrice(state.carts),
      };

    default:
      return state;
  }
};

export default cartReducer;
