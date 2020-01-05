import logger from "redux-logger";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

// const myLogger = store => next => action => {
//   const stale = store.getState();
//   next(action);
//   const current = store.getState();
//   console.log({ stale, action, current });
// };

// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch, store.getState);
//   } else {
//     next(action);
//   }
// }

export default [
  ...getDefaultMiddleware(),
  process.env.NODE_ENV === "development" && logger
].filter(Boolean);
