import React from "react";
import { action } from "@storybook/addon-actions";
import { Button, Input } from "ui/atoms";

export default {
  title: "atoms"
};

export const ButtonAtom = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

ButtonAtom.story = { name: "Button" };

export const InputAtom = () => <Input />;

InputAtom.story = {
  name: "Input"
};
