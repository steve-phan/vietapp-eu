import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
const BlogPost = ({ location, pageContext, data }) => {
  const { nextPostSlug, previousPostSlug } = pageContext
  const post = data.markdownRemark

  return (
    <Layout location={location} className="wrap-post">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h2 className="post-title">{post.frontmatter.title}</h2>
      <section
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        itemProp="articleBody"
      />
      <div className="post-navigation">
        {previousPostSlug && (
          <Link
            className="prev"
            to={`/blog/${previousPostSlug}`}
            // to={previousPostSlug}
          >
            Bài viết trước
          </Link>
        )}
        {nextPostSlug && (
          <Link
            className="next"
            to={`/blog/${nextPostSlug}`}
            // to={nextPostSlug}
          >
            Bài tiếp theo
          </Link>
        )}
      </div>
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
