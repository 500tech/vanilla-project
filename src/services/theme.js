import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { useAction } from "services/utils";
import * as themes from "themes";
import { themeActions } from "data/theme";

const themeNames = Object.keys(themes);

export const useThemeService = () => {
  const themeName = useSelector(({ theme }) => theme);
  const setTheme = useAction(themeActions.setTheme);
  const toggleTheme = useAction(themeActions.toggleTheme);
  return {
    themeName,
    themeNames,
    setTheme,
    toggleTheme
  };
};

export function ThemeService({ children }) {
  const { themeName } = useThemeService();
  const theme = themes[themeName];
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
