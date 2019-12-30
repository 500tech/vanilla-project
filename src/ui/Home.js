import React from "react";
import { Link } from "react-router-dom";
import { MainSection } from "ui/layout";
import { useAutofocus } from "hooks/autofocus";

export function Home() {
  const link = useAutofocus();
  return (
    <MainSection heading="Home Page">
      <blockquote>Be the route you want to see in the router</blockquote>
      <Link ref={link} to="/todos">
        Go to Todos page
      </Link>
    </MainSection>
  );
}
