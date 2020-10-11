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
          {experienceDetails.map(exp => (
            <>
              <div className="company-time">
                <p id="company">{exp.company}</p>
                <p>{exp.duration}</p>
              </div>
              <div className="role">{exp.position}</div>
            </>
          ))}

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

export const experienceDetails = [
  {
    company: "INSPIRIT VR",
    duration: "Aug 2020 - Present",
    position: "Full Stack Developer",
  },
  {
    company: "WTF-DIGITAL WAITER",
    duration: "May 2020 - Jul 2020",
    position: "Backend Developer",
  },
]

export default Experience
