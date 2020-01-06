export const PRESTATE = undefined;
export const ANY_ACTION = { type: "foo" + Math.random() };

export function createGivenWhenThenForData(reducer) {
  let currentState, newState;
  function setup(initialState) {
    currentState = initialState;
  }

  function runReducerForActions(actions) {
    newState = actions.reduce(reducer, currentState);
  }

  function expectNewStateToBeTheAssertedState(assertionState) {
    expect(newState).toBe(assertionState);
  }
  return { setup, runReducerForActions, expectNewStateToBeTheAssertedState };
}
