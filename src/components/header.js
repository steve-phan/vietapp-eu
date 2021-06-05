import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <div className="site-header">
      <div className="logo">VietApp</div>
      <nav>
        <Link to="/contact">Liên hệ </Link>
        <Link to="/tag">Các chủ đề</Link>
      </nav>
    </div>
  )
}

export default Header
