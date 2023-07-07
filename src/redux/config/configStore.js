import { createStore } from "redux";
import { combineReducers } from "redux";
import recipes from "../modules/recipes";
import user from "../modules/user";

const rootReducer = combineReducers({
  recipes,
  user,
});

const store = createStore(rootReducer);

export default store;
