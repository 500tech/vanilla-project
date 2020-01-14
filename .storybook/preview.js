import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { lightTheme } from 'themes';

const Backdrop = styled.div`
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const withStuff = storyFn => (
  <ThemeProvider theme={lightTheme}>
    <Backdrop>{storyFn()}</Backdrop>
  </ThemeProvider>
);

addDecorator(withStuff);
addDecorator(withKnobs);
