import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import productReducer from './product/product.reducer';

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
