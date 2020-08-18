import React from "react"
import { useSelector } from "react-redux"
import Themer from "../components/Themer/Themer"
import Intro from "../components/Intro/Intro"
import BackSkill from "../components/BackSkill/BackSkill"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects"
import BlogPreview from "../components/BlogPreview/BlogPreview"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import Fade from "react-reveal/Fade"
import SEO from "../components/SEO/SEO"

import "../css/App.css"
import "../css/main.scss"

const Home = () => {
  const dark = useSelector(state => state)
  return (
    <div className={`App ${dark && "dark"}`}>
      <SEO
        title="Home"
        description="Portfolio Website of Swaraj Samant Singh, a Full Stack Software Engineer"
      />
      <Fade duration={1000}>
        <div className="introd">
          <Themer />
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
        <BlogPreview />
      </Fade>
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
