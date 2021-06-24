import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./src/theme.js"

export const wrapPageElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
