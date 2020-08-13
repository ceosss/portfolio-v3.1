import React from "react"
import "./Footer.css"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p>
        Designed & Developed with{" "}
        <span role="img" aria-label="emoji">
          🧡
        </span>{" "}
        by Swaraj
        <img src={require("./../../images/rock.png")} alt="emoji" /> {year}
      </p>
      <div className="social">
        <div className="soc">
          {socialDetails.map(social => (
            <span className="social-span" key={social.name}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.img} alt={social.name} />
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

const socialDetails = [
  {
    name: "Email",
    img: require("./../../images/email.svg"),
    link:
      "mailto:sswarajsamant@gmail.com?subject=Hello%20Swaraj%2CFrom%20Portfolio",
  },
  {
    name: "Github",
    img: require("./../../images/github.svg"),
    link: "https://github.com/ceosss/",
  },
  {
    name: "Instagram",
    img: require("./../../images/instagram.svg"),
    link: "https://www.instagram.com/ceo.sss/",
  },
  {
    name: "Linkedin",
    img: require("./../../images/linkedin.svg"),
    link: "https://www.linkedin.com/in/ceosss/",
  },
  {
    name: "Twitter",
    img: require("./../../images/twitter.svg"),
    link: "https://twitter.com/swarajsamant",
  },
]

export default Footer
