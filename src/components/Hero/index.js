import React from "react"
import HeroIMg from "../../images/event.svg"
import "./hero.css"

const Hero = () => {
  return (
    <div className="container container-hero">
      <div className="hero-left">
        <h1 className="hero-left__title">
          Booking system for Restaurants or Nails Salons
        </h1>
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
