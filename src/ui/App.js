import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "ui/layout";
import { Home } from "ui/Home";
import { Todos } from "ui/Todos";
import { PageNotFound } from "ui/PageNotFound";
import { lightTheme, darkTheme } from "themes";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`;

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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todos" component={Todos} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer copyrightExpiary={2058} name="Example Corporation" />
        </MainContainer>
      </ThemeProvider>
    );
  }
}
