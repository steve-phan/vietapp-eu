import { Link } from "gatsby"
import React, { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { SwipeableDrawer, useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles(theme => {
  console.log(theme)
  return {
    burgerMenu: {
      position: "fixed",
      right: 13,
      cursor: "pointer",
      // zIndex: 2020,
      // backgroundColor: "black",

      "& span": {
        display: "block",
        width: 24,
        height: 2,
        margin: 5,
        backgroundColor: theme.highlight.color,
      },
    },
    burgerLink: {
      paddingTop: 80,
      width: "100vw",
      height: "100vh",
      maxWidth: 400,
      backgroundColor: "#f3f2f0",
      "& a": {
        paddingLeft: 18,
        display: "block",
        color: "#888",
        fontSize: 22,
        textDecoration: "none",
        paddingTop: 6,
        paddingBottom: 6,
      },
    },
    itemLink: {
      borderTop: `2px solid  #cecece`,
      paddingTop: "20vh !important",
    },
    line1: {
      transformOrigin: "top",
      transform: "rotatez(45deg) translate(5px,7px)",
      transition: "all 0.4s",
    },
    line2: {
      visibility: "hidden",
    },
    line3: {
      transformOrigin: "bottom",
      transform: "translate(-2px, -6px) rotatez(-45deg)",
      transition: "all 0.4s",
    },
  }
})

const Header = () => {
  const [isShow, setIsShow] = useState({ right: false })
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  console.log(matches)
  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setIsShow({ right: open })
  }
  return (
    <div className="site-header">
      <SwipeableDrawer
        anchor="right"
        open={isShow.right}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className={classes.burgerLink} onClick={() => toggleDrawer(true)}>
          <Link
            onClick={toggleDrawer(false)}
            className={classes.itemLink}
            to="/contact"
          >
            Contact
          </Link>
          <Link onClick={toggleDrawer(false)} to="/tags">
            Solutions
          </Link>
          <Link onClick={toggleDrawer(false)} to="/blog">
            Prices
          </Link>
        </div>
      </SwipeableDrawer>
      <div className="wrap-header">
        <div className="logo" onClick={toggleDrawer(false)}>
          <Link to="/">Vietapp</Link>{" "}
        </div>
        {matches ? (
          <div
            className={classes.burgerMenu}
            onClick={toggleDrawer(!isShow.right)}
          >
            <span className={isShow.right ? classes.line1 : ""}></span>
            <span className={isShow.right ? classes.line2 : ""}></span>
            <span className={isShow.right ? classes.line3 : ""}></span>
          </div>
        ) : (
          <nav>
            <Link to="/contact">Contact</Link>
            <Link to="/tags">Solutions</Link>
            <Link to="/blog">Prices</Link>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Header
