import React, { useState } from "react"
import Themer from "../components/Themer/Themer"
import Intro from "../components/Intro/Intro"
import BackSkill from "../components/BackSkill/BackSkill"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import Fade from "react-reveal/Fade"

import "../css/App.css"
import "../css/main.scss"

const Home = () => {
  const [dark, setDark] = useState(false)
  const themeChange = value => {
    setDark(value)
  }
  return (
    <div className={`App ${dark && "dark"}`}>
      <Fade duration={1000}>
        <div className="introd">
          <Themer themeChange={themeChange} dark={dark} />
          <Intro />
        </div>
      </Fade>

      <div className="back-skill">
        <BackSkill />
      </div>

      <Fade duration={1000}>
        <div className="exp-div">
          <Experience />
        </div>
      </Fade>
      <div className="projects-div">
        <Projects />
      </div>
      <Fade duration={1000}>
        <Form dark={dark} />
      </Fade>
      <Fade duration={1000}>
        <Footer />
      </Fade>
    </div>
  )
}

export default Home
