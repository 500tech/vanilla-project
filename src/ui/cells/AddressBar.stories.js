import React from "react";
import { createRouterDecorator } from "ui/story-utils";
import { AddressBar } from "ui/cells/AddressBar";

export default {
  title: "cells/AddressBar",
  decorators: [createRouterDecorator()]
};

export const Usage = () => <AddressBar />;
