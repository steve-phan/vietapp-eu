import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import WhyBooking from "../components/WhyBooking"
import Seo from "../components/seo"

const index = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Booking Online System" />
      <Hero />
      <WhyBooking />
    </Layout>
  )
}

export default index
