import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { lightTheme } from 'themes';

export const withTheme = node => (
  <ThemeProvider theme={lightTheme}>{node}</ThemeProvider>
);

export const mountWithTheme = node => mount(withTheme(node));

export const mountIntegration = (node, routerProps = {}) =>
  mount(<MemoryRouter {...routerProps}>{withTheme(node)}</MemoryRouter>);

export const PRESTATE = undefined;
export const ANY_ACTION = { type: 'foo' + Math.random() };

export function createGivenWhenThenForData(reducer) {
  let currentState, newState;
  function setup(initialState) {
    currentState = initialState;
  }

  function runReducerForActions(actions) {
    newState = actions.reduce(reducer, currentState);
  }

  function expectNewStateToBeTheAssertedState(assertionState) {
    expect(newState).toEqual(assertionState);
  }

  function expectStateToHaveChanged() {
    expect(newState).not.toBe(currentState);
  }

  const getState = () => newState;

  return {
    setup,
    runReducerForActions,
    expectNewStateToBeTheAssertedState,
    expectStateToHaveChanged,
    getState,
  };
}
