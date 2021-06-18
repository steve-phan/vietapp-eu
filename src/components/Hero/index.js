import React from "react"
import HeroIMg from "../../images/event.svg"
import "./hero.css"

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-left">
        <h1 className="hero-left__title">
          Booking system for Restaurants or Nails Salons
        </h1>
        <span></span>
        <button className="hero-button">
          <a href="https://booking.vietapp.eu/nail-vietnam">Demo</a>
        </button>
      </div>
      <div className="hero-right">
        <img src={HeroIMg} alt="" />
      </div>
    </div>
  )
}

export default Hero
