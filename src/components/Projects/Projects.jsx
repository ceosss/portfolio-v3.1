import React from "react"
import Fade from "react-reveal/Fade"
import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects">
      <div className="heading">PROJECTS</div>
      <div className="content">
        {projectsDetails.map((project, i) => (
          <Fade duration={2000} key={i}>
            <div className="project">
              <div className="image">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image} alt={project.title} />
                </a>
              </div>
              <div className="desc">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}

export const projectsDetails = [
  {
    title: "EXTRACTIFY",
    description:
      "Extractify is a tool to extract text from pdf. You can upload the pdf and extractify will sprinkle it's magic to provide you with the extracted text. You'll also be able to see the list of previoulsy converted Pdf files",
    github: "https://github.com/ceosss/extractify",
    live: "https://extractify-258bb.firebaseapp.com/",
    image: require("./EXTRACTIFY.png"),
  },
  {
    title: "MINUTE NEWS",
    description:
      "Minute-News App provides the latest news from 1000+ most read & reliable sources from all across the world. You can even filter down the news to the hottest topics around the world. Stay updated with current news with the Minute-News App.",
    github: "https://github.com/ceosss/news-app",
    live: "https://minute-news.web.app/",
    image: require("./MINUTE_NEWS.png"),
  },
  {
    title: "CRWN-CLOTHING",
    description:
      "E-commerce application similar to Shopify using React, Redux, React Hooks, React Router, Firebase, Stripe + more. This is a full-stack app (MERN stack), using Firebase.",
    github: "https://github.com/ceosss/crwn-clothing",
    live: "http://crwnclothingapp.herokuapp.com/",
    image: require("./CRWN_CLOTHING.png"),
  },
  {
    title: "COVID-19 TRACKER",
    description:
      "Track COVID-19 Local and Global Coronavirus cases with live status of active, recoveries and death counts plus visualization.",
    github: "https://github.com/ceosss/covid19-tracker",
    live: "http://c19tracker-webapp.herokuapp.com/",
    image: require("./COVID_19_TRACKER.png"),
  },
  {
    title: "EMOJI-SHORTENER",
    description:
      "A URL is a simple tool that takes a long URL and turns it into a short and convenient URL. To make it more interesting, I added emoji flavour to my link shortener.",
    github: "https://github.com/ceosss/emoji-shortner",
    live: "http://emojishort.herokuapp.com/",
    image: require("./EMOJI_SHORTENER.png"),
  },
  {
    title: "KIIT-ICT",
    description:
      "A Web App for my College to Manage Students can fill form online and submit their laptop to ICT Department and track the status from anywhere. Admins can send pickup message reminders to the user that too only after authentication.",
    github: "https://github.com/ceosss/KIIT-ICT",
    live: "https://kiit-ict.herokuapp.com/",
    image: require("./KIIT_ICT.png"),
  },
  {
    title: "WEATHER APP",
    description:
      "User Authenticates using Google Account and then the app automatically detects the user's location and uses API to fetch weather and forecasts of that location.",
    github: "https://github.com/ceosss/WeatherApp",
    live: "https://my-weather-app-v1.herokuapp.com/",
    image: require("./WEATHER_APP.png"),
  },
]

export default Projects
