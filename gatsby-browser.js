// custom typefaces
import React from "react"

import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"
import "./src/custom.css"
//  coy dark funky okaidia tomorrow twilight
// Highlighting for code
// import "prismjs/themes/prism-solarizedlight.css"
// // import "prismjs/themes/prism.css"
import "prismjs/themes/prism-okaidia.css"
// import "gatsby-syntax-highlights-dracula"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  highlight: {
    color: "#e84b63",
  },
})

export const wrapPageElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
