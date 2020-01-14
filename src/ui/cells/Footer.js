import React from 'react';
import { FooterSection } from 'ui/atoms';

export function Footer({ copyrightExpiary, name }) {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const showFooter = year <= copyrightExpiary;
  if (!showFooter) {
    return null;
  }
  return (
    <FooterSection>
      <small>
        &copy; Copyright {copyrightExpiary}, {name}
      </small>
    </FooterSection>
  );
}
