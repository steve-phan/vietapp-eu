import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"

const index = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
    </Layout>
  )
}

export default index
