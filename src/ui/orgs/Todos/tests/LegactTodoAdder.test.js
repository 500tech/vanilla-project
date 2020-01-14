import React from 'react';
import { mountIntegration } from 'test-utils';
import { TodoAdder } from 'ui/orgs/Todos/cells/TodoAdder';

jest.useFakeTimers();

describe('<TodoAdder (legacy)>', () => {
  it('should have focus on the input, no text and not valid', () => {
    const wrapper = mountIntegration(<TodoAdder />);

    expect(wrapper.find('input').getDOMNode()).toBe(document.activeElement);
    expect(wrapper.find(TodoAdder).state('text')).toBe('');
    expect(
      wrapper
        .find(TodoAdder)
        .instance()
        .isValid()
    ).toBeFalsy();
  });

  it('should checnge input value & enable the button when user types', () => {
    const wrapper = mountIntegration(<TodoAdder />);

    wrapper
      .find(TodoAdder)
      .instance()
      .setText('hello');

    expect(wrapper.find(TodoAdder).state('text')).toBe('hello');
    expect(
      wrapper
        .find(TodoAdder)
        .instance()
        .isValid()
    ).toBeTruthy();
  });

  it('should auto clear when text contains "clear"', () => {
    const wrapper = mountIntegration(<TodoAdder />);

    wrapper
      .find(TodoAdder)
      .instance()
      .setText('hello clearer');

    expect(wrapper.find(TodoAdder).state('text')).toBe('');
    expect(
      wrapper
        .find(TodoAdder)
        .instance()
        .isValid()
    ).toBeFalsy();
  });

  it('should submit input text on submit', () => {
    const onAdd = jest.fn();
    const wrapper = mountIntegration(<TodoAdder onAddTodo={onAdd} />);
    const adder = wrapper.find(TodoAdder);
    const adderInstance = adder.instance();

    adderInstance.setText('hello');
    adderInstance.submit();

    expect(adder.state('text')).toBe('');
    expect(onAdd).toHaveBeenCalledWith('hello');
  });

  it('should not submit on enter with no text', () => {
    const onAdd = jest.fn();
    const wrapper = mountIntegration(<TodoAdder onAddTodo={onAdd} />);
    const adder = wrapper.find(TodoAdder);
    const adderInstance = adder.instance();

    adderInstance.submit();

    expect(onAdd).not.toHaveBeenCalled();
  });

  it('should autosubmit after 3 seconds', () => {
    const onAdd = jest.fn();
    const wrapper = mountIntegration(<TodoAdder onAddTodo={onAdd} />);

    wrapper
      .find(TodoAdder)
      .instance()
      .setText('hello');
    jest.advanceTimersByTime(3000);

    expect(wrapper.find(TodoAdder).state('text')).toBe('');
    expect(onAdd).toHaveBeenCalledWith('hello');
  });
});
