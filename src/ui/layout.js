import React from "react";
import { HeaderSection, FooterSection, Main } from "ui/common";

export function Header({ children }) {
  return (
    <HeaderSection>
      <h1>{children}</h1>
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
    <Main id="todos-section">
      <h2>{heading}</h2>
      {children}
    </Main>
  );
}
