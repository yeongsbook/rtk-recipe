import { createSlice } from "@reduxjs/toolkit";
import mockRecipes from "data/recipes";

const initialState = [...mockRecipes];

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    createRecipe: (state, action) => {
      return [...state, action.payload];
    },
    updateRecipe: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    deleteRecipe: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { createRecipe, updateRecipe, deleteRecipe } =
  recipesSlice.actions;

export default recipesSlice.reducer;
