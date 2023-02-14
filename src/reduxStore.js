import { createStore } from "redux";

export const actionsTypes = {
  USER_DATA: "userData",
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionsTypes.USER_DATA: {
      console.log(action);
      return {
        ...state,
        user: {
          ...action.payload,
          isAuthenticated: true,
        },
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actions = {
  setUserData: (payload) => {
    store.dispatch({ type: actionsTypes.USER_DATA, payload });
  },
};

export default store;
