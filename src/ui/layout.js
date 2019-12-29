import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeaderSection, FooterSection, Main } from "ui/common";
import { AddressBar } from "ui/AddressBar";
import { ThemeConsumer } from "services/theme";

const Nav = styled.nav`
  &&& {
    a {
      margin-left: 5px;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export function Header({ children }) {
  return (
    <ThemeConsumer>
      {({ toggleTheme }) => (
        <HeaderSection>
          <h1 onClick={toggleTheme}>{children}</h1>
          <AddressBar />
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/todos">Todos</Link>
          </Nav>
        </HeaderSection>
      )}
    </ThemeConsumer>
  );
}

export function Footer({ copyrightExpiary, name }) {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const showFooter = year <= copyrightExpiary;
  if (!showFooter) {
    return null;
  }
  return (
    <FooterSection>
      <small>
        &copy; Copyright {copyrightExpiary}, {name}
      </small>
    </FooterSection>
  );
}

export function MainSection({ children, heading }) {
  return (
    <Main>
      <h2>{heading}</h2>
      {children}
    </Main>
  );
}

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`;
