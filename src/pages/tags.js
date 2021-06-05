import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import slugify from "../utils/slugify"

const NotFoundPage = ({ data, location, pageContext }) => {
  console.log(pageContext)
  const { tags } = pageContext
  return (
    <Layout location={location}>
      <Seo title="404: Not Found" />
      <div className="tags">
        {tags.map((tag, index) => {
          return (
            <Link to={`/${slugify(tag.trim())}`} key={index}>
              {tag.trim()}
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default NotFoundPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
