import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
