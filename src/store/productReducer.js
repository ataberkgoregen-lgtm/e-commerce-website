// ============================================================
// productReducer.js
// ============================================================
import {
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  SET_SORT,
  SET_CATEGORY,
} from "./productActions";

const initialProductState = {
  limit: 36,
  offset: 0,
  filter: "",
  sort: "",
  category_id: null,
};

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category_id: action.payload, offset: 0 };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload, offset: 0 };
    case SET_SORT:
      return { ...state, sort: action.payload, offset: 0 };
    default:
      return state;
  }
};
