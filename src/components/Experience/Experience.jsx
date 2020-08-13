import React from "react"
import Point from "./../../images/point.png"
import PDF from "./Resume.pdf"
import "./Experience.css"

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="heading">EXPERIENCE</div>
        <div className="content">
          <div className="company-time">
            <p id="company">WTF-DIGITAL WAITER</p>
            <p>May 2020 - Jul 2020</p>
          </div>
          <div className="role">SDE Intern</div>
          <div className="resume">
            <a href={PDF} target="_blank" rel="noopener noreferrer">
              View My Resume <img src={Point} alt="point" className="emoji" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
