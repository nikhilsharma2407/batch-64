import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
  withCredentials: true,
});

export const ENDPOINTS = {
  USER: {
    LOGIN: "/user/login",
    SIGNUP: "/user/signup",
    RESET_PASSWORD: "/user/reset-password",
    LOGOUT: "/user/logout",
  },
  STRIPE: {
    CREATE_CHECKOUT_SESSION: "/stripe/create-checkout-session",
    CHECKOUT_SESSION: "/stripe/checkout-session",
  },
  PRODUCTS: {
    GET_PRODUCTS: "/products",
  },

  CART: {
    ADD: "/cart/add",
    REMOVE: "/cart/remove",
    INCREMENT: "/cart/increment",
    DECREMENT: "/cart/decrement",
    CLEAR_CART: "/cart/clear-cart",
    GET_CART_ITEMS: "/cart/get-cart-items",
  },
};

export const REQUEST_TYPES = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};
