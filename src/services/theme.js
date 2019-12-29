import React, { Component, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "themes";

const ThemeContext = createContext();

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeService extends Component {
  state = {
    theme: lightTheme
  };

  toggleTheme = () =>
    this.setState({
      theme: this.state.theme === lightTheme ? darkTheme : lightTheme
    });

  render() {
    const ctx = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme
    };

    return (
      <ThemeContext.Provider value={ctx}>
        <ThemeProvider theme={this.state.theme}>
          {this.props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}
