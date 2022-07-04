import { addProduct, removeProduct } from "./action";

export const cartThunk = (product) => {
  return (dispatch, getState) => {
    dispatch(addProduct(product));
    const { cart } = getState();

    localStorage.setItem("@cart", JSON.stringify(cart));
  };
};

export const removeThunk = (product) => {
  return (dispatch, getState) => {
    dispatch(removeProduct(product));
    const { cart } = getState();

    localStorage.setItem("@cart", JSON.stringify(cart));
  };
};
