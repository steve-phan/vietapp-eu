import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo title="Liên hệ với chúng tôi" />
      <h4>Email:</h4>
      <p style={{ color: "deepskyblue" }}>vietappeu@gmail.com</p>
    </Layout>
  )
}

export default NotFoundPage
