// ============================================================
// index.js
// ============================================================
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { productReducer } from "./productReducer";
import { reducer } from "./reducer";
// import { clientReducer } from "./clientReducer";
// import { cartReducer } from "./cartReducer";
import api from "../api/axios";
import { setUser } from "./clientActions";

// ============================================================
// ROOT REDUCER
// ============================================================
const rootReducer = combineReducers({
  reducer: reducer,
  product: productReducer,
  // client: clientReducer,
  // cart: cartReducer,
});

// ============================================================
// STORE
// ============================================================
export const myStore = createStore(rootReducer, applyMiddleware(thunk, logger));

// ============================================================
// THUNK ACTION CREATORS
// ============================================================

// ----- LOGIN -----
export const fetchLogin = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", credentials);
    // dispatch(loginUser({ name: data.name, email: data.email, avatar: data.avatar, token: data.token }));
    // — clientReducer eklenince açılacak

    dispatch(
      setUser({
        token: data.token,
        name: data.name,
        email: data.email,
        role_id: data.role_id,
      }),
    );
  } catch (err) {
    console.error(err);
  }
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
