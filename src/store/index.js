import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer, initialState } from "./reducer";

// ============================================================
// STORE
// ============================================================
export const myStore = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk),
);

// ============================================================
// THUNK ACTION CREATORS  (async — API çağrıları buraya gelir)
// ============================================================
import {
  setProducts,
  setBestSeller,
  setBlogPosts,
  setCategories,
  loginUser,
  setLoading,
  setError,
} from "./actions";

// ----- PRODUCTS -----
export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading("products", true));
  try {
    const res = await fetch(
      "https://workintech-fe-ecommerce.onrender.com/products",
    );
    const data = await res.json();
    dispatch(setProducts(data.products));
    dispatch(setBestSeller(data.products));
  } catch (err) {
    dispatch(setError("products", err.message));
  }
};

// ----- CATEGORIES -----
export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://workintech-fe-ecommerce.onrender.com/categories",
    );
    const data = await res.json();
    dispatch(setCategories(data));
  } catch (err) {
    dispatch(setError("categories", err.message));
  }
};

// ----- BLOG POSTS -----
export const fetchBlogPosts = () => async (dispatch) => {
  dispatch(setLoading("blogPosts", true));
  try {
    const res = await fetch(
      "https://workintech-fe-ecommerce.onrender.com/posts",
    );
    const data = await res.json();
    dispatch(setBlogPosts(data));
  } catch (err) {
    dispatch(setError("blogPosts", err.message));
  }
};

// ----- LOGIN -----
export const fetchLogin = (credentials) => async (dispatch) => {
  // credentials: { email, password }
  try {
    const res = await fetch(
      "https://workintech-fe-ecommerce.onrender.com/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      },
    );
    const data = await res.json();
    dispatch(
      loginUser({
        name: data.name,
        email: data.email,
        avatar: data.avatar,
        token: data.token,
      }),
    );
  } catch (err) {
    dispatch(setError("user", err.message));
  }
};
