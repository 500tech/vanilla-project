import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeaderSection, FooterSection, Main } from "ui/common";

const Nav = styled.nav`
  &&& {
    a {
      margin-left: 5px;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export function Header({ children, ...props }) {
  return (
    <HeaderSection>
      <h1 {...props}>{children}</h1>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </Nav>
    </HeaderSection>
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
