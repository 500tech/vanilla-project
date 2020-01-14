import React from 'react';
import { MemoryRouter, useLocation } from 'react-router-dom';

const LocationLabel = () => {
  const location = useLocation();
  return (
    <p>
      <code>{JSON.stringify(location)}</code>
    </p>
  );
};

export function createRouterDecorator(routerProps = {}) {
  return storyFn => (
    <MemoryRouter {...routerProps}>
      <LocationLabel />
      <section style={{ padding: '20px', border: '1px solid red' }}>
        {storyFn()}
      </section>
    </MemoryRouter>
  );
}
