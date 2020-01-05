import React, { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import * as themes from "themes";
import { toggleTheme, setTheme } from "data/theme";

const themeNames = Object.keys(themes);

const ThemeContext = createContext();

export const ThemeConsumer = ThemeContext.Consumer;

export const useThemeService = () => {
  return useContext(ThemeContext);
};

export function BaseThemeService({
  children,
  themeName,
  setTheme,
  toggleTheme
}) {
  const theme = themes[themeName];
  const ctx = {
    themeName,
    themeNames,
    setTheme,
    toggleTheme
  };
  return (
    <ThemeContext.Provider value={ctx}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const ThemeService = connect(
  function mapStateToProps({ theme }) {
    return {
      themeName: theme
    };
  },
  {
    toggleTheme,
    setTheme
  }
)(BaseThemeService);
