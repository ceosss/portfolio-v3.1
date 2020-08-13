import React from "react";
import Wave from "./../../images/wave.png";
import "./Intro.css";
import Point from "./../../images/point.png";
import Working from "./../../images/working.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="greet">
        <h1>
          Hello!
          <img src={Wave} alt="greet" />
        </h1>
      </div>

      <div className="introduction">
        I'm <span className="name">Swaraj Samant Singh</span> , a Full Stack
        Software Engineer focused on building beautiful interfaces as well as
        handling server-side communication between various sources
        <img src={Working} alt="working" />.
      </div>
      <div className="contact">
        <h3>
          Get in touch <img src={Point} alt="point" className="emoji" />
          <a href="mailto:sswarajsamant@gmail.com" target="blank">
            sswarajsamant@gmail.com
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Intro;
