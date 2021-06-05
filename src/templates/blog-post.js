import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
const BlogPost = ({ location, pageContext, data }) => {
  console.log(location)
  const { nextPostSlug, previousPostSlug } = pageContext
  const post = data.markdownRemark
  console.log(data)
  return (
    <Layout location={location} className="wrap-post">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        itemProp="articleBody"
      />
      {nextPostSlug && (
        <Link to={nextPostSlug}>
          <h1>Next post</h1>{" "}
        </Link>
      )}
      {previousPostSlug && <Link to={previousPostSlug}>Previous post </Link>}
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
