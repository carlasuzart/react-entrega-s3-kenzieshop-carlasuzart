import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addProduct = (product) => ({
  type: ADD_CART,
  product,
});

export const removeProduct = (product) => ({
  type: REMOVE_CART,
  product,
});
