import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { mountWithTheme } from "test-utils";
import { Footer } from "ui/cells/Footer";

describe("<Footer>", () => {
  it("should render correctly", () => {
    const footer = <Footer copyrightExpiary={2099} name="foobar" />;
    const renderedTree = shallow(footer);
    expect(toJSON(renderedTree)).toMatchSnapshot();
  });

  it("Should show the correct year and name", () => {
    const wrapper = mountWithTheme(
      <Footer copyrightExpiary={2099} name="foobar" />
    );

    const footer = wrapper.getDOMNode();
    expect(footer).toHaveTextContent(/foobar/);
    expect(footer).toHaveTextContent(/2099/);
  });

  it("Should only appear if copyright is valid", () => {
    const wrapper = mountWithTheme(
      <Footer copyrightExpiary={1999} name="foobar" />
    );
    const footer = wrapper.getDOMNode();
    expect(footer).toBeNull();
  });
});
