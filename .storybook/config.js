import React from "react";
import { configure, addDecorator } from "@storybook/react";
import styled from "styled-components";
import { ThemeService } from "services/theme";

const Backdrop = styled.div`
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const withStuff = storyFn => (
  <ThemeService>
    <Backdrop>{storyFn()}</Backdrop>
  </ThemeService>
);

addDecorator(withStuff);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
