import axios from 'axios';

import productActionTypes from './product.types';

const BASE_URL = 'http://localhost:3000/';

export const fetchProductsStart = input => ({
  type: productActionTypes.FETCH_PRODUCT_START,
  payload: input,
});

export const fetchProductsSuccess = products => ({
  type: productActionTypes.FETCH_PRODUCT_SUCCESS,
  payload: products,
});

export const fetchProductsFail = error => ({
  type: productActionTypes.FETCH_PRODUCT_FAIL,
  payload: error,
});

export const fetchProductsSuccessLast = () => ({
  type: productActionTypes.FETCH_PRODUCT_SUCCESS_LAST,
});

export const fetchProductsSortSuccess = products => ({
  type: productActionTypes.FETCH_PRODUCT_SORT_SUCCESS,
  payload: products,
});

export const fetchProductsAsync = input => {
  return async dispatch => {
    dispatch(fetchProductsStart(input._sort));
    try {
      let url = `${BASE_URL}products`;
      let response = await axios({
        method: 'GET',
        url: url,
        params: input,
      });
      // console.log('res----', response);
      if (!response.data.length) {
        dispatch(fetchProductsSuccessLast());
      } else {
        let ads = {
          id: `ads-${response.data[0].id}`,
          key: 'ads',
          size: 10,
          price: 10,
          face: 'ads',
          date: 'Sun Jun 30 2020 11:37:53 GMT+0700 (Western Indonesia Time)',
          image: `http://localhost:3000/ads/?r=${response.data[0].id}`,
        };
        dispatch(fetchProductsSuccess([...response.data, ads]));
      }
    } catch (error) {
      dispatch(fetchProductsFail(error.message));
    }
  };
};

export const fetchProductsSortAsync = input => {
  return async dispatch => {
    dispatch(fetchProductsStart(input._sort));
    try {
      let url = `${BASE_URL}products`;
      let response = await axios({
        method: 'GET',
        url: url,
        params: input,
      });
      let ads = {
        id: `ads-${response.data[0].id}`,
        key: 'ads',
        size: 10,
        price: 10,
        face: 'ads',
        date: 'Sun Jun 30 2020 11:37:53 GMT+0700 (Western Indonesia Time)',
        image: `http://localhost:3000/ads/?r=${response.data[0].id}`,
      };
      dispatch(fetchProductsSortSuccess(response.data.concat(ads)));
    } catch (error) {
      dispatch(fetchProductsFail(error.message));
    }
  };
};
