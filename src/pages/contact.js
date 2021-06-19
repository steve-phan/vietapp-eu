import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles(theme => {
  console.log(theme)
  return {
    root: {
      color: theme.highlight.color,
      boxShadow: theme.shadows[10],
    },
  }
})

const NotFoundPage = ({ data, location }) => {
  const classes = useStyles()
  return (
    <Layout location={location}>
      <Seo title="Liên hệ với chúng tôi" />
      <h4>Email:</h4>
      <p className="post-title">vietappeu@gmail.com</p>
      <Button className={classes.root}> Primary Button</Button>
    </Layout>
  )
}

export default NotFoundPage
