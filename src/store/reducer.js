import { data } from "../data";
import {
  SET_PRODUCTS,
  SET_BESTSELLER,
  SET_CATEGORIES,
  SET_SELECTED_CATEGORY,
  SET_BLOG_POSTS,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  CLEAR_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  TOGGLE_MOBILE_MENU,
  SET_ACTIVE_SLIDE,
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
  SET_LOADING,
  SET_ERROR,
} from "./actions";

// ============================================================
// INITIAL STATE
// ============================================================
export const initialState = {
  // Statik — değişmez
  contact: data.contact,
  navLinks: data.navLinks,
  heroSlides: data.heroSlides,
  editorsPick: data.editorsPick,
  footer: data.footer,

  shop: data.shop,
  // API gelene kadar data.js'den beslenir
  products: {
    list: data.products,
    bestSellers: data.products,
    loading: false,
    error: null,
  },
  categories: {
    list: data.editorsPick.categories,
    selected: null,
  },
  blogPosts: {
    list: data.blogPosts,
    loading: false,
    error: null,
  },

  // Kullanıcı
  user: {
    isLoggedIn: false,
    name: "",
    email: "",
    avatar: "",
  },

  // Sepet
  cart: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },

  // Favori
  wishlist: {
    items: [],
  },

  // UI
  ui: {
    mobileMenuOpen: false,
    activeSlide: 0,
    notification: null, // { type: "success" | "error" | "info", message: "" }
  },
};

// ============================================================
// HELPERS
// ============================================================
const calcCart = (items) => ({
  totalItems: items.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: parseFloat(
    items.reduce((sum, i) => sum + i.salePrice * i.quantity, 0).toFixed(2),
  ),
});

// ============================================================
// REDUCER
// ============================================================
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ----- PRODUCTS -----
    case SET_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          list: action.payload,
          loading: false,
          error: null,
        },
      };

    case SET_BESTSELLER:
      return {
        ...state,
        products: {
          ...state.products,
          bestSellers: action.payload,
        },
      };

    // ----- CATEGORIES -----
    case SET_CATEGORIES:
      return {
        ...state,
        categories: { ...state.categories, list: action.payload },
      };

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        categories: { ...state.categories, selected: action.payload },
      };

    // ----- BLOG -----
    case SET_BLOG_POSTS:
      return {
        ...state,
        blogPosts: {
          ...state.blogPosts,
          list: action.payload,
          loading: false,
          error: null,
        },
      };

    // ----- USER -----
    case LOGIN_USER:
      return {
        ...state,
        user: { isLoggedIn: true, ...action.payload },
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: { isLoggedIn: false, name: "", email: "", avatar: "" },
      };

    // ----- CART -----
    case ADD_TO_CART: {
      const exists = state.cart.items.find((i) => i.id === action.payload.id);
      const updatedItems = exists
        ? state.cart.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i,
          )
        : [...state.cart.items, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        cart: { items: updatedItems, ...calcCart(updatedItems) },
      };
    }

    case REMOVE_FROM_CART: {
      const updatedItems = state.cart.items.filter(
        (i) => i.id !== action.payload,
      );
      return {
        ...state,
        cart: { items: updatedItems, ...calcCart(updatedItems) },
      };
    }

    case UPDATE_CART_ITEM: {
      const updatedItems = state.cart.items.map((i) =>
        i.id === action.payload.id
          ? { ...i, quantity: action.payload.quantity }
          : i,
      );
      return {
        ...state,
        cart: { items: updatedItems, ...calcCart(updatedItems) },
      };
    }

    case CLEAR_CART:
      return {
        ...state,
        cart: { items: [], totalItems: 0, totalPrice: 0 },
      };

    // ----- WISHLIST -----
    case ADD_TO_WISHLIST: {
      const alreadyAdded = state.wishlist.items.find(
        (i) => i.id === action.payload.id,
      );
      if (alreadyAdded) return state;
      return {
        ...state,
        wishlist: { items: [...state.wishlist.items, action.payload] },
      };
    }

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: {
          items: state.wishlist.items.filter((i) => i.id !== action.payload),
        },
      };

    // ----- UI -----
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        ui: { ...state.ui, mobileMenuOpen: !state.ui.mobileMenuOpen },
      };

    case SET_ACTIVE_SLIDE:
      return {
        ...state,
        ui: { ...state.ui, activeSlide: action.payload },
      };

    case SET_NOTIFICATION:
      return {
        ...state,
        ui: { ...state.ui, notification: action.payload },
      };

    case CLEAR_NOTIFICATION:
      return {
        ...state,
        ui: { ...state.ui, notification: null },
      };

    // ----- LOADING / ERROR -----
    case SET_LOADING:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          loading: action.payload.value,
        },
      };

    case SET_ERROR:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          error: action.payload.message,
          loading: false,
        },
      };

    default:
      return state;
  }
};
