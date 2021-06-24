import React from "react"
import "./whybooking.css"
import { makeStyles } from "@material-ui/styles"

import { Grid, Card, Typography } from "@material-ui/core"
import { AlarmAdd, ThumbUp } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 60,
  },
  reasonTitle: {
    display: "flex",
    justifyContent: "center",
    height: 36,
    lineHeight: "36px",
    fontSize: 28,
    fontWeight: 300,
    textAlign: "center",
    marginTop: 26,
  },
  icons: {
    fill: theme.highlight.color,
    fontSize: 36,
    marginRight: 5,
    // marginTop: 10,
  },
  content: {
    fontSize: "18px",
    padding: 20,
    width: "100%",
    maxWidth: 500,
    margin: "0 auto",

    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
}))

const WhyEmail = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={12} md={6}>
        <Card>
          <Typography className={classes.reasonTitle}>
            <AlarmAdd className={classes.icons} /> Tiết kiệm thời gian
          </Typography>
          <Typography
            className={classes.content}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Ngày nay việc đặt lịch cho các công sở, bác sỹ, luật sư, ... đã trở
            nên qúa phổ biến. Đặt lich Online tiết kiệm được nhân lực cho việc
            nghe điện thoại, tiếp nhận thông tin, kiểm tra các lịch hẹn còn
            trống,... điều này dẫn đến việc không thoải mái cho khách hàng phải
            chờ đợi. Thậm chí người quản lý và nhân viên cũng thuận tiện hơn
            trong việc kiểm tra lịch hẹn và công việc của minh nhanh hơn, khoa
            học và tiết kiệm thời gian hơn.
          </Typography>
        </Card>
      </Grid>
      <Grid item sm={12} md={6}>
        <Card>
          <Typography className={classes.reasonTitle}>
            <ThumbUp className={classes.icons} />
            Sự chuyên nghiệp
          </Typography>
          <Typography
            className={classes.content}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Lên lịch cuộc hẹn trực tuyến mang đến cho khách hàng nhiều tự do
            hơn. Họ có thể xem lại thời gian sẵn có khi rảnh rỗi, đặt trước bất
            kỳ giờ nào trong ngày và dễ dàng lên lịch lại khi mâu thuẫn phát
            sinh — tất cả đều không cần phải gọi điện. Khách hàng, nhân viên và
            người quản lý dễ dàng thêm lịch hẹn vào lịch cá nhân của từng người
            dễ dàng. Và chúng ta có thể nhận được những thông báo khi các lịch
            hẹn này chuẩn bị đến.
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
