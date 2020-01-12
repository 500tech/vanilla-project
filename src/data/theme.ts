import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as themes from "themes";

type ThemeName = keyof typeof themes;
const themeNames = Object.keys(themes) as ThemeName[];
const [initialTheme] = themeNames;

const { reducer, actions } = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    setTheme: (themeName, { payload }: PayloadAction<ThemeName>) =>
      themeNames.includes(payload) ? payload : themeName,
    toggleTheme: themeName => {
      const indexOfCurrentTheme = themeNames.indexOf(themeName);
      const indexOfNextTheme = (indexOfCurrentTheme + 1) % themeNames.length;
      return themeNames[indexOfNextTheme];
    }
  }
});

export const themeReducer = reducer;
export const themeActions = actions;
