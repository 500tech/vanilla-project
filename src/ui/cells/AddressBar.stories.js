import React from "react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { AddressBar } from "ui/cells/AddressBar";

const LocationLabel = () => {
  const location = useLocation();
  return (
    <p>
      <code>{JSON.stringify(location)}</code>
    </p>
  );
};

function withRouter(storyFn) {
  return (
    <MemoryRouter>
      <section>{storyFn()}</section>
      <LocationLabel />
    </MemoryRouter>
  );
}

export default {
  title: "cells/AddressBar",
  decorators: [withRouter]
};

export const Usage = () => <AddressBar />;
