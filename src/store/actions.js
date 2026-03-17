// ============================================================
// ACTION TYPES
// ============================================================

// ----- PRODUCTS -----
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_BESTSELLER = "SET_BESTSELLER";

// ----- CATEGORIES -----
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";

// ----- BLOG -----
export const SET_BLOG_POSTS = "SET_BLOG_POSTS";

// ----- USER -----
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// ----- CART -----
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";

// ----- WISHLIST -----
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

// ----- UI -----
export const TOGGLE_MOBILE_MENU = "TOGGLE_MOBILE_MENU";
export const SET_ACTIVE_SLIDE = "SET_ACTIVE_SLIDE";
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";

// ----- LOADING / ERROR -----
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

// ============================================================
// ACTION CREATORS
// ============================================================

// ----- PRODUCTS -----
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
export const setBestSeller = (products) => ({
  type: SET_BESTSELLER,
  payload: products,
});

// ----- CATEGORIES -----
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setSelectedCategory = (category) => ({
  type: SET_SELECTED_CATEGORY,
  payload: category,
});

// ----- BLOG -----
export const setBlogPosts = (posts) => ({
  type: SET_BLOG_POSTS,
  payload: posts,
});

// ----- USER -----
// payload: { name, email, avatar }
export const loginUser = (user) => ({ type: LOGIN_USER, payload: user });
export const logoutUser = () => ({ type: LOGOUT_USER });

// ----- CART -----
// payload: { id, title, image, salePrice, ... }
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
export const updateCartItem = (productId, quantity) => ({
  type: UPDATE_CART_ITEM,
  payload: { id: productId, quantity },
});
export const clearCart = () => ({ type: CLEAR_CART });

// ----- WISHLIST -----
export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});
export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});

// ----- UI -----
export const toggleMobileMenu = () => ({ type: TOGGLE_MOBILE_MENU });
export const setActiveSlide = (index) => ({
  type: SET_ACTIVE_SLIDE,
  payload: index,
});
// payload: { type: "success" | "error" | "info", message: "" }
export const setNotification = (notification) => ({
  type: SET_NOTIFICATION,
  payload: notification,
});
export const clearNotification = () => ({ type: CLEAR_NOTIFICATION });

// ----- LOADING / ERROR -----
// key: "products" | "blogPosts"
export const setLoading = (key, value) => ({
  type: SET_LOADING,
  payload: { key, value },
});
export const setError = (key, message) => ({
  type: SET_ERROR,
  payload: { key, message },
});
