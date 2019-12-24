import styled, { css } from "styled-components";

export const noop = () => null;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: var(--textColor);
  color: var(--bgColor);
  cursor: pointer;

  :active {
    cursor: grab;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const common = css`
  padding: 20px;
  background-color: var(--textColor);
  color: var(--bgColor);
`;

export const HeaderSection = styled.header`
  ${common}
  h1 {
    margin: 0;
  }
`;

export const FooterSection = styled.footer`
  ${common}
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Main = styled.main`
  padding: 20px;
  margin-bottom: 58px;

  section * {
    margin-right: 5px;
  }
`;

export const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: none;
  width: 180px;
  transition: width 0.2s linear;

  :focus,
  :not(:placeholder-shown) {
    width: 500px;
  }
`;
