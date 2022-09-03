import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const portfolio = () => {
  return (
    <div>
      <Hero heading="My Portflio" message="This is some of my recent projects" />
      <Portfolio />
    </div>
  );
};

export default portfolio;
