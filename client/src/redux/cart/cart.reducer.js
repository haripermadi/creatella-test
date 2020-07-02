import cartActionTypes from './cart.types';
import {addToCart, reduceCartItem} from '../../helper';

const INITIAL_STATE = {
  carts: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        carts: addToCart(state.carts, action.payload),
      };
    case cartActionTypes.REDUCE_ITEM:
      return {
        ...state,
        carts: reduceCartItem(state.carts, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
