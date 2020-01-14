import React from 'react';
import { Main } from 'ui/atoms';

export function MainSection({ children, heading }) {
  return (
    <Main>
      <h2>{heading}</h2>
      {children}
    </Main>
  );
}
