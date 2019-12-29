import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Header, Footer, MainContainer } from "ui/layout";
import { MainView } from "ui/MainView";
import { lightTheme, darkTheme } from "themes";

export class App extends Component {
  state = {
    theme: lightTheme
  };

  toggleTheme = () =>
    this.setState({
      theme: this.state.theme === lightTheme ? darkTheme : lightTheme
    });

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Header onClick={this.toggleTheme}>ExCo.</Header>
          <MainView />
          <Footer copyrightExpiary={2058} name="Example Corporation" />
        </MainContainer>
      </ThemeProvider>
    );
  }
}
