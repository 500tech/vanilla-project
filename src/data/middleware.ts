import logger from "redux-logger";
import { getDefaultMiddleware, Middleware } from "@reduxjs/toolkit";

export default [
  ...getDefaultMiddleware(),
  process.env.NODE_ENV === "development" && logger
].filter(Boolean) as Middleware[];
