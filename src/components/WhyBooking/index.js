import React from "react"
import "./whybooking.css"
import { makeStyles } from "@material-ui/styles"

import { Grid, Card, Typography } from "@material-ui/core"
import { AlarmAdd, ThumbUp } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 60,
  },
  icons: {
    fill: theme.highlight.color,
    fontSize: 36,
    // marginTop: 10,
  },
}))

const WhyEmail = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={12} md={6}>
        <Card>
          <Typography gutterBottom variant="h5" component="h2">
            <AlarmAdd className={classes.icons} /> Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Card>
      </Grid>
      <Grid item sm={12} md={6}>
        <Card>
          <Typography gutterBottom variant="h4" component="h2">
            <ThumbUp className={classes.icons} />
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Card>
      </Grid>
    </Grid>
    // <div className="whybooking">
    //   <h2 className="middle-title">Lợi ích của đặt lịch hẹn online</h2>
    //   <ul>
    //     <li>
    //       <p>Tiếp cận khách hàng tiềm năng 24/7</p>
    //     </li>
    //     <li>
    //       <p>Giảm thiểu nhân công trả lời điện thoại</p>
    //     </li>
    //     <li>
    //       <p>Giảm thời gian quá tải cho quán</p>
    //     </li>
    //     <li>
    //       <p>Tạo phong cách chuyên nghiệp cho cửa hàng </p>
    //     </li>
    //   </ul>
    // </div>
  )
}
export default WhyEmail
