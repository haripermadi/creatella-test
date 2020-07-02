import productActionTypes from './product.types';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  errMessage: '',
  isLastData: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case productActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...state.products, ...action.payload],
        isLastData: false,
      };
    case productActionTypes.FETCH_PRODUCT_SUCCESS_LAST:
      return {
        ...state,
        isLoading: false,
        isLastData: true,
      };
    case productActionTypes.FETCH_PRODUCT_SORT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        isLastData: false,
      };
    case productActionTypes.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
