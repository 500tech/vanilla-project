import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HeaderSection } from 'ui/atoms';
import { AddressBar } from 'ui/cells/AddressBar';
import { useThemeService } from 'services/theme';

const Nav = styled.nav`
  &&& {
    a {
      margin-left: 5px;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export function Header({ children }) {
  const { toggleTheme, themeName, setTheme, themeNames } = useThemeService();
  return (
    <HeaderSection>
      <h1 onClick={toggleTheme}>{children}</h1>
      <select value={themeName} onChange={e => setTheme(e.target.value)}>
        {themeNames.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <AddressBar />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </Nav>
    </HeaderSection>
  );
}
