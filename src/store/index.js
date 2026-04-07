// ============================================================
// index.js
// ============================================================
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { productReducer } from "./productReducer";
import { reducer } from "./reducer";
import { clientReducer } from "./clientReducer";
import { shoppingCartReducer } from "./shoppingCartReducer";
import api from "../api/axios";
import { setUser, logoutUser } from "./clientActions";
import { setCart } from "./shoppingCartAction";

// ============================================================
// ROOT REDUCER -- Combine Reducers
// ============================================================
const rootReducer = combineReducers({
  reducer: reducer,
  product: productReducer,
  client: clientReducer,
  cart: shoppingCartReducer,
});

// ============================================================
// STORE
// ============================================================
export const myStore = createStore(rootReducer, applyMiddleware(thunk, logger));

// ============================================================
// THUNK ACTION CREATORS
// ============================================================

// ----- LOGOUT -----
export const fetchLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  dispatch(logoutUser());
};

// ----- LOGIN -----
export const fetchLogin = (credentials, rememberMe) => async (dispatch) => {
  return api
    .post("/login", credentials)
    .then((response) => {
      dispatch(
        setUser({
          token: response.data.token,
          name: response.data.name,
          email: response.data.email,
          role_id: response.data.role_id,
        }),
      );
      if (rememberMe) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
      } else {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("name", response.data.name);
        sessionStorage.setItem("email", response.data.email);
      }
    })
    .catch((err) => {
      throw err;
    });
};

// ----- REGISTER -----
// credentials: { role_id, name, email, password }
export const fetchRegister = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.post("/signup", credentials);
    // Kayıt başarılı — kullanıcıya mail gönderildi, otomatik login olmaz
    // data.message: "User created. Check your email for activation instructions."
    return data.message;
  } catch (err) {
    console.error(err);
  }
};

export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().cart;

  const existing = cart.find((item) => item.product.id === product.id);

  let updatedCart;
  if (existing) {
    updatedCart = cart.map((item) =>
      item.product.id === product.id
        ? { ...item, count: item.count + 1 }
        : item,
    );
  } else {
    updatedCart = [...cart, { product, count: 1 }]; // Dizinin içine eleman ekleme işlemini yap
  }
  sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  dispatch(setCart(updatedCart));
};

export const removeToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().cart;

  const existing = cart.find((item) => item.product.id === product.id);

  let updatedCart;
  if (existing && existing.count > 1) {
    updatedCart = cart.map((item) =>
      item.product.id === product.id
        ? { ...item, count: item.count - 1 }
        : item,
    );
  } else {
    updatedCart = cart.filter((item) => item.product.id !== product.id);
  }

  sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  dispatch(setCart(updatedCart));
};
