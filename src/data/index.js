import { configureStore } from "@reduxjs/toolkit";
import * as reducer from "./reducer";

/**
 * interface Action {
 *    type: string;
 *    payload?: any;
 *    meta?: object;
 *    error?: Error;
 * }
 */

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development"
});

export default store;
