import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import WhyBooking from "../components/WhyBooking"

const index = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <WhyBooking />
    </Layout>
  )
}

export default index
