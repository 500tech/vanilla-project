import React, { Component } from "react";
import styled from "styled-components";
import { Organisms } from "ui/orgs";
import { Header } from "ui/cells/Header";
import { Footer } from "ui/cells/Footer";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`;

export class Ecosystem extends Component {
  render() {
    return (
      <MainContainer>
        <Header>ExCo.</Header>
        <Organisms />
        <Footer copyrightExpiary={2058} name="Example Corporation" />
      </MainContainer>
    );
  }
}
