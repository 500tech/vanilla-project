import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import { MainSection } from 'ui/mols';

export default {
  title: 'molecules',
};

export const MainSectionMol = () => (
  <MainSection heading={text('Heading', 'Sample heading')}>
    <section>
      {Array.from({ length: number('# lines', 2) }).map((_, idx) => (
        <p key={idx}>This Is line #{idx + 1}</p>
      ))}
    </section>
    <section>
      <span>Hello</span>
      <span>World</span>
    </section>
  </MainSection>
);

MainSectionMol.story = { name: 'MainSection' };
