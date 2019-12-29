import React, { Component, createContext } from "react";
import { ThemeProvider } from "styled-components";
import * as themes from "themes";

const themeNames = Object.keys(themes);
const [initialTheme] = themeNames;

const ThemeContext = createContext();

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeService extends Component {
  state = {
    theme: initialTheme
  };

  get theme() {
    return themes[this.state.theme];
  }

  setTheme = themeName => this.setState({ theme: themeName });

  toggleTheme = () => {
    const indexOfCurrentTheme = themeNames.indexOf(this.state.theme);
    const indexOfNextTheme = (indexOfCurrentTheme + 1) % themeNames.length;
    this.setTheme(themeNames[indexOfNextTheme]);
  };

  render() {
    const { theme, setTheme } = this;
    const ctx = {
      setTheme,
      themeNames,
      themeName: this.state.theme,
      toggleTheme: this.toggleTheme
    };

    return (
      <ThemeContext.Provider value={ctx}>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}
