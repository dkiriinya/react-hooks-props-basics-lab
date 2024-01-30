import React from "react";
import Links from "./Links"; // Make sure the import is correct and uses the correct component name

function About(props) {
  const hasBio = props.bio;

  return (
    <div id="about">
      <h2>About Me</h2>
      
      {hasBio && <p>{props.bio}</p>}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* Render the Links component */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
