import { createReducer } from "@reduxjs/toolkit";
import * as themes from "themes";
import { setTheme, toggleTheme } from "./actions";

const themeNames = Object.keys(themes);
const [initialTheme] = themeNames;

export const themeReducer = createReducer(initialTheme, {
  [setTheme]: (_, { payload }) => payload,
  [toggleTheme]: themeName => {
    const indexOfCurrentTheme = themeNames.indexOf(themeName);
    const indexOfNextTheme = (indexOfCurrentTheme + 1) % themeNames.length;
    return themeNames[indexOfNextTheme];
  }
});
