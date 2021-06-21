import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { fetchProducts } from "./actions/productActions";
import { orderReducer } from "./reducers/orderReducer";

const initialState = {};
const composeEnhanser =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
  }),
  initialState,
  composeEnhanser(applyMiddleware(thunk))
);

store.dispatch(fetchProducts());

export default store;
