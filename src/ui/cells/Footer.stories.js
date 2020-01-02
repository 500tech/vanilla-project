import React from "react";
import { number, text } from "@storybook/addon-knobs";
import { Footer } from "ui/cells/Footer";

export default {
  title: "cells/Footer"
};

export const WithProps = () => (
  <Footer
    name={text("Name", "foobar co")}
    copyrightExpiary={number("Year", 2058, {
      range: true,
      min: 2018,
      max: 2060,
      step: 1
    })}
  />
);
