import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart/reducer";
import productsReducer from "./products/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
