import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainSection } from "ui/layout";

export function Home() {
  const link = useRef();
  useEffect(() => {
    link.current.focus();
  }, []);
  return (
    <MainSection heading="Home Page">
      <blockquote>Be the route you want to see in the router</blockquote>
      <Link ref={link} to="/todos">
        Go to Todos page
      </Link>
    </MainSection>
  );
}
