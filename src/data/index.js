import { createStore, combineReducers } from "redux";
import { theme } from "./theme";

/**
 * interface Action {
 *    type: string;
 *    payload?: any;
 *    meta?: object;
 *    error?: Error;
 * }
 */

function counter(state = 0, action) {
  switch (action.type) {
    case "increment": {
      const { payload = 1 } = action;
      return state + payload;
    }
    case "decrement": {
      const { payload = 1 } = action;
      return state - payload;
    }
    default:
      return state;
  }
}

function clicks(state = 0, action) {
  switch (action.type) {
    case "increment":
    case "decrement": {
      return state + 1;
    }
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  counter,
  clicks,
  theme
});

const store = createStore(mainReducer);

export default store;
