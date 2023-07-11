import { configureStore } from "@reduxjs/toolkit";
import recipes from "../modules/recipes";
import user from "../modules/user";

const store = configureStore({
  reducer: { recipes, user },
});

export default store;
