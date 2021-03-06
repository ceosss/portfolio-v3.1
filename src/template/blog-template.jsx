import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import readingTime from "reading-time"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import { useSelector } from "react-redux"
import Themer from "../components/Themer/Themer"
import SEO from "../components/SEO/SEO"

import "./../css/blog-template.scss"

const BlogTemp = props => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const dark = useSelector(state => state)
  const blog = props.data.blog

  const profileImg = props.data.file.childImageSharp.fixed

  return (
    <div className="single-blog-page">
      <section className={`single-blog ${dark && "dark"}`}>
        <SEO title={blog.title} description={blog.description} />
        <div className="themer-div">
          <Themer />
        </div>

        <div className="head">
          <h1>{blog.title}</h1>
        </div>
        <div className="desc">
          <Img fixed={profileImg} />
          <span className="name-date">
            <p>Swaraj</p>
            <p>•</p>
            <p>{blog.date}</p>
          </span>
          <span className="cat-read">
            <p>{blog.category}</p>
            <p>•</p>
            <p> {readingTime(blog.content).text}</p>
          </span>
        </div>
        <div className="featured-image">
          <Img fluid={blog.image.childImageSharp.fluid} />
        </div>
        <div className="content">
          <ReactMarkdown source={blog.content} />
        </div>
        <div className="btn">
          <Link to="/blogs">ALL BLOGS</Link>
        </div>
      </section>
    </div>
  )
}

export default BlogTemp

export const query = graphql`
  query getBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      category
      content
      date(formatString: "Do MMM, YYYY")
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
    }
    file(relativePath: { eq: "Public.jpeg" }) {
      childImageSharp {
        fixed(width: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
