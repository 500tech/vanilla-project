import React from 'react';
import { shallow } from 'enzyme';
import { mountIntegration } from 'test-utils';
import { TodoAdder } from 'ui/orgs/Todos/cells/TodoAdder';

jest.useFakeTimers();

describe.only('<TodoAdder (legacy)>', () => {
  it('should have focus on input', () => {
    const wrapper = mountIntegration(<TodoAdder />);

    expect(wrapper.find('input').getDOMNode()).toBe(document.activeElement);
  });

  it('should have no text and not be valid', () => {
    const wrapper = shallow(<TodoAdder />);
    expect(wrapper.state('text')).toBe('');
    expect(wrapper.instance().isValid()).toBeFalsy();
  });

  it('should checnge input value & enable the button when user types', () => {
    const wrapper = shallow(<TodoAdder />);

    wrapper.instance().setText('hello');

    expect(wrapper.state('text')).toBe('hello');
    expect(wrapper.instance().isValid()).toBeTruthy();
  });

  it('should auto clear when text contains "clear"', () => {
    const wrapper = shallow(<TodoAdder />);

    wrapper.instance().setText('hello clearer');

    expect(wrapper.state('text')).toBe('');
    expect(wrapper.instance().isValid()).toBeFalsy();
  });

  it('should submit input text on submit', () => {
    const onAdd = jest.fn();
    const wrapper = shallow(<TodoAdder onAddTodo={onAdd} />);
    const adder = wrapper;
    const adderInstance = adder.instance();

    adderInstance.setText('hello');
    adderInstance.submit();

    expect(adder.state('text')).toBe('');
    expect(onAdd).toHaveBeenCalledWith('hello');
  });

  it('should not submit on enter with no text', () => {
    const onAdd = jest.fn();
    const wrapper = shallow(<TodoAdder onAddTodo={onAdd} />);
    const adder = wrapper;
    const adderInstance = adder.instance();

    adderInstance.submit();

    expect(onAdd).not.toHaveBeenCalled();
  });

  it('should autosubmit after 3 seconds', () => {
    const onAdd = jest.fn();
    const wrapper = shallow(<TodoAdder onAddTodo={onAdd} />);

    wrapper.instance().setText('hello');
    jest.advanceTimersByTime(3000);

    expect(wrapper.state('text')).toBe('');
    expect(onAdd).toHaveBeenCalledWith('hello');
  });
});
