import { Check } from "lucide-react";
import { SET_CART, ADD_FAV, SET_CHECK } from "./shoppingCartAction";

const savedCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const favCart = localStorage.getItem("fav")
  ? JSON.parse(localStorage.getItem("fav"))
  : [];

const initialState = {
  cart: savedCart,
  fav: favCart,
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case ADD_FAV:
      return { ...state, fav: action.payload };
    case SET_CHECK:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
