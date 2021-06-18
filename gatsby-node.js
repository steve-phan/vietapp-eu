const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require("./src/utils/slugify")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagPost = path.resolve(`./src/templates/tag-post.js`)
  const allTags = path.resolve(`./src/templates/tags.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
        nodes {
          id
          frontmatter {
            title
            tag
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  let tagList = []
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug =
        index === 0 ? null : `${slugify(posts[index - 1].frontmatter.title)}/`
      const nextPostSlug =
        index === posts.length - 1
          ? null
          : `${slugify(posts[index + 1].frontmatter.title)}/`
      const slug = `/blog/${slugify(post.frontmatter.title)}`
      const tags = post.frontmatter.tag.split(",")
      tags.forEach(tag => {
        if (tagList.map(item => item.name).includes(tag.trim())) {
          tagList = tagList.map(item =>
            item.name === tag.trim() ? { ...item, count: item.count + 1 } : item
          )
        } else {
          tagList.push({ name: tag.trim(), count: 1 })
        }
      })

      createPage({
        path: slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
    createPage({
      path: "tags",
      component: allTags,
      context: {
        tags: tagList,
      },
    })
    tagList.forEach((tag, index) => {
      const tagRegex = `/${tag.name}/`
      createPage({
        path: slugify(tag.name.trim()),
        component: tagPost,
        context: {
          // Pass a tag name to get posts  by tag name
          tag,
          tagRegex,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
