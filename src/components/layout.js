import { Link } from "gatsby"
import React, { useEffect } from "react"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }
  const handleScroll = e => {
    // console.log(wrap)
    // const content = document.querySelector("#gatsby-focus-wrapper")
    // // wrap.scrollTop = "1500px"
    // console.log(content)
    const siteHeader = document.querySelector(".site-header")
    const element = e.target.firstElementChild
    if (element.scrollTop > 0) {
      siteHeader.style.boxShadow = "0 0 2px 2px #cecece"
      // siteHeader.style.background = "white"
    } else {
      // siteHeader.style.background = "white"
      siteHeader.style.boxShadow = "unset"
    }

    console.log(element.scrollTop)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Copyright
        {` `}
        <a href="https://www.vietapp.eu" className="footer-logo">
          VietApp
        </a>
      </footer>
    </div>
  )
}

export default Layout
