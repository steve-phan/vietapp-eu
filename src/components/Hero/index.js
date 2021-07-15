import React from "react"
import HeroIMg from "../../images/event.svg"
import "./hero.css"
// import {} from "@material-ui/styles"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="container container-hero">
      <div className="hero-left">
        <h2 className="hero-left__title">
          Hệ thống đặt lịch hẹn booking online{" "}
        </h2>
        <p>
          VietApp cung cấp những công cụ hiệu quả, thiết thực cho các quán ăn,
          tiệm nails, ...
        </p>
        <button className="hero-button">
          <a href="https://booking.vietapp.eu/">Dùng thử miễn phí</a>
        </button>
      </div>
      <div className="hero-right">
        {/* <StaticImage
          src="../../images/event.svg"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fixed"
          width={400}
          height={400}
        /> */}
        <img src={HeroIMg} alt="" />
      </div>
      <div style={{ clear: "both" }}>
        <hr className="hero-hr" />
      </div>
    </div>
  )
}

export default Hero
