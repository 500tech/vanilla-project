import * as themes from "themes";
import { SET_THEME, TOGGLE_THEME } from "./actions";

const themeNames = Object.keys(themes);
const [initialTheme] = themeNames;

export function themeReducer(themeName = initialTheme, action) {
  switch (action.type) {
    case SET_THEME: {
      return action.payload;
    }
    case TOGGLE_THEME: {
      const indexOfCurrentTheme = themeNames.indexOf(themeName);
      const indexOfNextTheme = (indexOfCurrentTheme + 1) % themeNames.length;
      return themeNames[indexOfNextTheme];
    }
    default:
      return themeName;
  }
}
