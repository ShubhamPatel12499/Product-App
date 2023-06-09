import {
  ADD_PRODUCT_SUCCESS,
    GET_DATA_ERROR,
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    err: false,
    data: [],
    addedProducts:[]
  };
  
  export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_DATA_LOADING: {
        return {
          ...state,
          err: false,
          loading: true,
        };
      }
      case GET_DATA_SUCCESS: {
        return {
          ...state,
          loading: false,
          err: false,
          data: payload,
        };
      }
      case GET_DATA_ERROR: {
        return {
          ...state,
          err: true,
          loading: false,
        };
      }
      case ADD_PRODUCT_SUCCESS:{
        return {
          ...state,
          "addedProducts":[...state.addedProducts,payload]
        }
      }   
      default: {
        return state;
      }
    }
  };