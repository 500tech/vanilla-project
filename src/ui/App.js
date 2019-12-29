import React, { Component } from "react";
import { Header, Footer, MainContainer } from "ui/layout";
import { MainView } from "ui/MainView";

export class App extends Component {
  render() {
    return (
      <MainContainer>
        <Header>ExCo.</Header>
        <MainView />
        <Footer copyrightExpiary={2058} name="Example Corporation" />
      </MainContainer>
    );
  }
}
