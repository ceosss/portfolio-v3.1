import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "./../css/Blogs.scss"
import Themer from "../components/Themer/Themer"

const Blogs = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  const [dark, setDark] = useState(false)
  const themeChange = value => {
    setDark(value)
  }

  return (
    <div className={`blog-page ${dark && "dark"}`}>
      <Themer themeChange={themeChange} dark={dark} />
      <h1>BLOG </h1>
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="s-blog-list" key={blog.slug}>
            <Link to={blog.slug}>
              <div className="img">
                <Img fluid={blog.image.childImageSharp.fluid} />
              </div>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <span>
                <p>{blog.category}</p>
                <p>
                  <em>{blog.date}</em>
                </p>
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div className="btn">
        <Link to="/">HOME</Link>
      </div>
    </div>
  )
}

export default Blogs

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        category
        content
        date(formatString: "Do MMM, YYYY")
        description
        title
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
