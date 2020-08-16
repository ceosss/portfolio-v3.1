import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import "../../css/Blogs.scss"
import "./BlogPreview.scss"

const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
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

const BlogPreview = () => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = useStaticQuery(query)
  return (
    <div className="blog-preview">
      <div className="blog-page">
        <h1>LATEST - BLOGS </h1>
        <div className="blog-list">
          {blogs.map(blog => (
            <div className="s-blog-list" key={blog.slug}>
              <Link to={`/blogs/${blog.slug}`}>
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
          <Link to="/blogs">ALL BLOGS</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPreview
