import { createSlice } from '@reduxjs/toolkit';
import * as themes from 'themes';

const themeNames = Object.keys(themes);
const [initialTheme] = themeNames;

const { reducer, actions } = createSlice({
  name: 'theme',
  initialState: initialTheme,
  reducers: {
    setTheme: (themeName, { payload }) =>
      themeNames.includes(payload) ? payload : themeName,
    toggleTheme: themeName => {
      const indexOfCurrentTheme = themeNames.indexOf(themeName);
      const indexOfNextTheme = (indexOfCurrentTheme + 1) % themeNames.length;
      return themeNames[indexOfNextTheme];
    },
  },
});

export const themeReducer = reducer;
export const themeActions = actions;
