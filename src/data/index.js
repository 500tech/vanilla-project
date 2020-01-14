import { configureStore } from '@reduxjs/toolkit';
import middleware from './middleware';
import * as reducer from './reducer';

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
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
