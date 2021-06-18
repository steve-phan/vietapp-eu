import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <div className="site-header">
      <div className="wrap-header">
        <div className="logo">
          <Link to="/">Vietapp</Link>{" "}
        </div>
        <nav>
          <Link to="/contact">Contact</Link>
          <Link to="/tags">Topics</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
