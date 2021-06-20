import React from "react"
import HeroIMg from "../../images/event.svg"
import "./hero.css"
// import {} from "@material-ui/styles"

const Hero = () => {
  return (
    <div className="container container-hero">
      <div className="hero-left">
        <h2 className="hero-left__title">
          Booking system for Restaurants or Nails Salons{" "}
        </h2>
        <p>
          Vietapp is a powerful platform to promote your business to potential
          customers.
        </p>
        <button className="hero-button">
          <a href="https://booking.vietapp.eu/nail-vietnam">Free Trial</a>
        </button>
      </div>
      <div className="hero-right">
        <img src={HeroIMg} alt="" />
      </div>
    </div>
  )
}

export default Hero
