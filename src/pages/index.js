import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import WhyEmail from "../components/WhyEmail"

const index = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <WhyEmail />
    </Layout>
  )
}

export default index
