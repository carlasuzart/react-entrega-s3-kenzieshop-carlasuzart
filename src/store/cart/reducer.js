import { ADD_CART, REMOVE_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const add = action.product;
      return [...state, add];
    case REMOVE_CART:
      const remove = action.product.id;
      return state.filter((item) => item.id !== remove);
    default:
      return state;
  }
};

export default cartReducer;
