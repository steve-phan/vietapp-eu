---
title: Đếm số lượng bài viết theo chủ đề
date: "2021-06-06T23:12:03.284Z"
description: "Thống kê lại xem bài viết về chủ đề nào được viết nhiều nhất"
tag: "Gatsby, Reactjs, Javascript"
---

1. Tạo ra một empty Array, `let tagList = []`

2. Lặp qua từng post một sau đó tạo ra một array bao gồm những tag có trong bài viết .

```jsx
posts.forEach(post => {
  const tags = post.frontmatter.tag.split(",")
})
```

3. Kiểm tra xem tag đó đã có trong `tagList` hay chưa. Nếu chưa push nó vào dưới dạng 1 object với 2 thuộc tính `name` và `count : 1` , nếu có thì tăng `count` lên 1

```js
tags.forEach(tag => {
  if (tagList.map(item => item.name).includes(tag.trim())) {
    tagList = tagList.map(item =>
      item.name === tag.trim() ? { ...item, count: item.count + 1 } : item
    )
  } else {
    tagList.push({ name: tag.trim(), count: 1 })
  }
})
```
