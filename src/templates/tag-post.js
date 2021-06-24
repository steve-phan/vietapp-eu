import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import slugify from "../utils/slugify"
const TagPosts = ({ location, pageContext, data }) => {
  const { tag } = pageContext
  const tags = data.allMarkdownRemark

  return (
    <Layout location={location} className="wrap-post">
      <Seo
        title={tag.name}
        // description={post.frontmatter.description || post.excerpt}
      />
      {tags.nodes.map((tag, index) => {
        return (
          <li key={tag.frontmatter.title} style={{ listStyle: `none` }}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link
                    to={`/blog/${slugify(tag.frontmatter.title)}`}
                    itemProp="url"
                  >
                    <span itemProp="headline">{tag.frontmatter.title}</span>
                  </Link>
                </h2>
                <small>{tag.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: tag.frontmatter?.description || tag.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        )
      })}
    </Layout>
  )
}

export default TagPosts

export const pageQuery = graphql`
  query TagPosts($tagRegex: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { tag: { regex: $tagRegex } } }) {
      nodes {
        frontmatter {
          description
          tag
          title
        }
        id
        html
      }
    }
  }
`
