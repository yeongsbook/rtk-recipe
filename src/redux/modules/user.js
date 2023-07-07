const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

const initialState = null;

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...action.payload };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default user;
