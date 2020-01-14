import { PRESTATE, ANY_ACTION, createGivenWhenThenForData } from 'test-utils';
import { themeActions, themeReducer } from 'data/theme';

describe('themeReducer', () => {
  const {
    setup,
    runReducerForActions,
    expectNewStateToBeTheAssertedState,
  } = createGivenWhenThenForData(themeReducer);

  it('should should have the correct initial state', () => {
    given: setup(PRESTATE);
    when: runReducerForActions([ANY_ACTION]);
    then: expectNewStateToBeTheAssertedState('lightTheme');
  });

  it('should set the theme, given the correct action', () => {
    given: setup('lightTheme');
    when: runReducerForActions([themeActions.setTheme('darkTheme')]);
    then: expectNewStateToBeTheAssertedState('darkTheme');
  });

  it('should not set the theme, given a bad theme', () => {
    given: setup('lightTheme');
    when: runReducerForActions([themeActions.setTheme('dark')]);
    then: expectNewStateToBeTheAssertedState('lightTheme');
  });

  it('should toggle themes correctly', () => {
    given: setup('lightTheme');
    when: runReducerForActions([themeActions.toggleTheme()]);
    then: expectNewStateToBeTheAssertedState('darkTheme');
  });

  it('Toggle should go back to light theme after thorough loop', () => {
    given: setup('lightTheme');
    when: runReducerForActions([
      themeActions.toggleTheme(),
      themeActions.toggleTheme(),
      themeActions.toggleTheme(),
      themeActions.toggleTheme(),
    ]);
    then: expectNewStateToBeTheAssertedState('lightTheme');
  });

  it('should handle a user flow', () => {
    given: setup('lightTheme');
    when: runReducerForActions([
      themeActions.toggleTheme(),
      themeActions.toggleTheme(),
      themeActions.toggleTheme(),
      themeActions.toggleTheme(),
      ANY_ACTION,
      ANY_ACTION,
      themeActions.setTheme('mad'),
      themeActions.setTheme('madTheme'),
      themeActions.toggleTheme(),
      themeActions.toggleTheme(),
      themeActions.toggleTheme(),
    ]);
    then: expectNewStateToBeTheAssertedState('darkTheme');
  });
});
