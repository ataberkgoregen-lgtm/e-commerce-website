import {
  LOGOUT_USER,
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
  SET_USER,
} from "./clientActions.js";

const initialClientState = {
  user: {
    token: localStorage.getItem("token") || "",
    name: "",
    email: "",
    role_id: "",
  },
  addressList: [],
  creditCard: [],
  roles: [],
  theme: "light",
  language: "tr",
};

export const clientReducer = (state = initialClientState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: { token: "", name: "", email: "", role_id: "" },
      };
    default:
      return state;
  }
};
