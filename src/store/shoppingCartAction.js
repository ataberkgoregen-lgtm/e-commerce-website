export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_FAV = "ADD_FAV";
export const SET_CHECK = "SET_CHECK";

export const setCheck = (item) => ({ type: SET_CHECK, payload: item });

export const setCart = (item) => ({ type: SET_CART, payload: item });

export const setFav = (item) => ({ type: ADD_FAV, payload: item });

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
