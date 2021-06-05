import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import slugify from "../utils/slugify"

const TagsPage = ({ data, location, pageContext }) => {
  const { tags } = pageContext

  return (
    <Layout location={location}>
      <Seo title="404: Not Found" />
      <div className="tags">
        {tags?.map((tag, index) => {
          return (
            <Link to={`/${slugify(tag.name.trim())}`} key={index}>
              {tag.name.trim()}
              <span className="tag-count">({tag.count}) </span>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default TagsPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
