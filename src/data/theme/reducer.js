import * as themes from "themes";

const themeNames = Object.keys(themes);
const [initialTheme] = themeNames;

export function theme(themeName = initialTheme, action) {
  switch (action.type) {
    case "setTheme": {
      return action.payload;
    }
    case "toggleTheme": {
      const indexOfCurrentTheme = themeNames.indexOf(themeName);
      const indexOfNextTheme = (indexOfCurrentTheme + 1) % themeNames.length;
      return themeNames[indexOfNextTheme];
    }
    default:
      return themeName;
  }
}
