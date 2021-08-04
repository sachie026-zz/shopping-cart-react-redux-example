import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  cardReducer,
  cartReducer,
});
