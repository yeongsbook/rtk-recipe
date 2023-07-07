import mockRecipes from "data/recipes";

const CREATE_RECIPE = "recipes/CREATE_RECIPE";
const UPDATE_RECIPE = "recipes/UPDATE_RECIPE";
const DELETE_RECIPE = "recipes/DELETE_RECIPE";

export const createRecipe = (payload) => {
  return {
    type: CREATE_RECIPE,
    payload,
  };
};

export const updateRecipe = (payload) => {
  return {
    type: UPDATE_RECIPE,
    payload,
  };
};

export const deleteRecipe = (payload) => {
  return {
    type: DELETE_RECIPE,
    payload,
  };
};

const initialState = [...mockRecipes];

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return [...state, action.payload];
    case UPDATE_RECIPE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    case DELETE_RECIPE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default recipes;
