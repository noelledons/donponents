import React from "react";
import Card from "../../components/Card";
import './About.scss'

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about__cards">
      <Card position="1" title="First" description="This is a test" />
      <Card position="2" title="Second" description="This is a test" />
      <Card position="3" title="Third" description="This is a test" />

      </div>
      
    </div>
  );
};

export default About;
