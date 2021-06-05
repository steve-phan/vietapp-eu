import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <div className="site-header">
      <div className="logo">
        <Link to="/">VietApp</Link>{" "}
      </div>
      <nav>
        <Link to="/contact">Liên hệ </Link>
        <Link to="/tags">Các chủ đề</Link>
      </nav>
    </div>
  )
}

export default Header
