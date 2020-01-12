import { configureStore, StateFromReducersMapObject } from "@reduxjs/toolkit";
import middleware from "./middleware";
import * as reducer from "./reducer";

export type State = StateFromReducersMapObject<typeof reducer>;

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === "development"
});

export default store;
