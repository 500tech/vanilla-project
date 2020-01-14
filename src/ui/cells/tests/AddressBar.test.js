import React from 'react';
import { mountIntegration } from 'test-utils';
import { AddressBar } from 'ui/cells/AddressBar';

describe('<AddressBar>', () => {
  let wrapper, input, inputEl, back, forward;
  it('should show the current url on mount', () => {
    given: setup(['/foo']);
    then: expectInputToBe('/foo');
  });

  it('should go back when pressing "back" and it should reflect on the textbox', () => {
    given: setup(['/', '/foo', '/bar']);
    when: clickBackButton();
    then: expectInputToBe('/foo');
  });

  it('should go forward when pressing "forward"', () => {
    given: setup(['/', '/foo']);
    when: {
      clickBackButton();
      clickForwardButton();
    }
    then: expectInputToBe('/foo');
  });

  it('should the url when I type into the textbox', () => {
    given: setup();
    when: typeIntoTextbox('/meow');
    then: expectInputToBe('/meow');
  });

  it('should go the correct url on submit', () => {
    given: setup(['/', '/foo', '/bar']);
    when: {
      typeIntoTextbox('/meow');
      clickEnterOnInput();
    }
    then: expectInputToBe('/meow');
    when: clickBackButton();
    then: expectInputToBe('/bar');
  });

  it('should work well with complex locations', () => {
    given: setup();
    when: {
      typeIntoTextbox('/foo?meow=true#hethalnu');
      clickEnterOnInput();
      clickBackButton();
      clickForwardButton();
    }
    then: expectInputToBe('/foo?meow=true#hethalnu');
  });

  it('should override the changes on clicking back', () => {
    given: setup(['/foo', '/']);
    when: {
      typeIntoTextbox('/meow');
      clickBackButton();
    }
    then: expectInputToBe('/foo');
  });

  function setup(initialEntries) {
    wrapper = mountIntegration(<AddressBar />, {
      initialEntries,
      initialIndex: initialEntries && initialEntries.length - 1,
    });
    input = wrapper.find('input');
    inputEl = input.getDOMNode();

    back = wrapper.find('button').first();
    forward = wrapper.find('button').last();
  }
  const expectInputToBe = url => expect(inputEl).toHaveValue(url);
  const clickBackButton = () => back.simulate('click');
  const clickForwardButton = () => forward.simulate('click');
  const typeIntoTextbox = text =>
    input.simulate('change', { target: { value: text } });
  const clickEnterOnInput = () => input.simulate('submit');
});
