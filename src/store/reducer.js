// reducer.js
import { data } from "../data";

export const initialState = {
  // Statik — değişmez, API'den gelmiyor
  contact: data.contact,
  navLinks: data.navLinks,
  heroSlides: data.heroSlides,
  editorsPick: data.editorsPick,
  footer: data.footer,
  shop: data.shop,
  blogPosts: data.blogPosts,
  blogPage: data.blogPage,
};

export const reducer = (state = initialState) => {
  return state; // statik, hiç değişmez
};
