import React from 'react';
import { mountIntegration } from 'test-utils';
import { TodoAdder } from 'ui/orgs/Todos/cells/TodoAdder';

jest.useFakeTimers();

describe('<TodoAdder>', () => {
  let wrapper, input, inputEl, button, buttonEl, addTodo;

  it('should have focus on the input, no text and disabled button', () => {
    given: setup();
    then: {
      expectInputToBeFocused();
      expectInputToBe('');
      expectAddDisabled();
    }
  });

  it('should checnge input value & enable the button when user types', () => {
    given: setup();
    when: typeIntoTextbox('hello');
    then: {
      expectAddEnabled();
      expectInputToBe('hello');
    }
  });

  it('should auto clear when text contains "clear"', () => {
    given: setup();
    when: typeIntoTextbox('hello clearer');
    then: {
      expectInputToBe('');
      expectAddDisabled();
    }
  });

  it('should submit input text on add button click', () => {
    given: setup();
    when: {
      typeIntoTextbox('hello');
      clickAdd();
    }
    then: {
      expectInputToBe('');
      expectAddDisabled();
      expectTodoAddedWithTitle('hello');
    }
  });

  it('should submit input text on input enter press', () => {
    given: setup();
    when: {
      typeIntoTextbox('hello');
      clickEnterOnInput();
    }
    then: {
      expectInputToBe('');
      expectAddDisabled();
      expectTodoAddedWithTitle('hello');
    }
  });

  it('should not submit on enter with no text', () => {
    given: setup();
    when: clickEnterOnInput();
    then: expectNoTodoWasAdded();
  });

  it('should autosubmit after 3 seconds', () => {
    given: setup();
    when: {
      typeIntoTextbox('hello');
      waitForAutosubmitPeriod();
    }
    then: {
      expectInputToBe('');
      expectAddDisabled();
      expectTodoAddedWithTitle('hello');
    }
  });

  function setup() {
    addTodo = jest.fn();
    wrapper = mountIntegration(<TodoAdder onAddTodo={addTodo} />);
    input = wrapper.find('input');
    inputEl = input.getDOMNode();
    button = wrapper.find('button');
    buttonEl = button.getDOMNode();
  }
  const expectInputToBe = text => expect(inputEl).toHaveValue(text);
  const typeIntoTextbox = text =>
    input.simulate('change', { target: { value: text } });
  const clickEnterOnInput = () => input.simulate('submit');
  const clickAdd = () => button.simulate('submit');
  const expectAddDisabled = () => expect(buttonEl).toBeDisabled();
  const expectAddEnabled = () => expect(buttonEl).toBeEnabled();
  const expectInputToBeFocused = () => expect(inputEl).toHaveFocus();
  const expectTodoAddedWithTitle = text =>
    expect(addTodo).toHaveBeenCalledWith(text);
  const expectNoTodoWasAdded = () => expect(addTodo).not.toHaveBeenCalled();
  const waitForAutosubmitPeriod = () => jest.advanceTimersByTime(3000);
});
