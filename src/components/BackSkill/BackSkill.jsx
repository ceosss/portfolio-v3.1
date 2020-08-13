import React from "react";
import Fade from 'react-reveal/Fade';

import "./BackSkill.css";

const BackSkill = () => {
  return (
    <div className="holder">
      <Fade duration={1000}>
        <div className="background">
          <div className="back-heading">Background</div>
          <div className="back-content">
            <p>
              <strong>I'm Actively Looking For Job Opportunities.</strong>
            </p>
            <p>
              As a Software Engineer, I enjoy bridging the gap between engineering
              and various other departments — by combining my technical knowledge
              with my keen eye for design to create a beautiful product as well as
              by sprinkling my magic spells at the backend.
          </p>
            <p>
              My goal is to always build applications that are scalable and
              efficient under the hood while providing engaging, pixel-perfect
              user experiences.
          </p>
            <p>
              <strong>When I'm not in front of a computer screen</strong>, I'm
            probably surfing the internet, watching youtube videos, travelling,
            or crossing off another item on my bucket list.
          </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="skills">
          <div className="skill-heading">Skills</div>
          <div className="skill-content">
            <div className="skill-div">
              <span>LANGUAGES</span>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>SASS</p>
              <p>C++</p>
              <p>SQL</p>
            </div>
            <div className="skill-div">
              <span>FRAMEWORKS</span>
              <p>React</p>
              <p>Gatsby</p>
              <p>Node</p>
              <p>Express</p>
              <p>Wordpress</p>
            </div>
            <div className="skill-div">
              <span>TOOLS</span>
              <p>Bash</p>
              <p>Git</p>
              <p>Github</p>
              <p>Chrome Tools</p>
              <p>Postman</p>
              <p>JWT</p>
              <p>REST</p>
            </div>
            <div className="skill-div">
              <span>OTHERS</span>
              <p>Firebase</p>
              <p>MongoDB</p>
              <p>GraphQL</p>
              <p>mySQL</p>
              <p>Heroku</p>
              <p>NPM</p>
              <p>Wireframing</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default BackSkill;
