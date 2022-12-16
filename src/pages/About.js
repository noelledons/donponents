import React from "react";
import Card from "../components/Card";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Card position="1" title="First" description="This is a test" />
      <Card position="2" title="Second" description="This is a test" />
      <Card position="3" title="Third" description="This is a test" />
    </div>
  );
};

export default About;
