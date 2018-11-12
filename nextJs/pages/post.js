
import React, { Component } from 'react'

import {withRouter} from 'next/router'
import Link from 'next/link'

// router属性只能在withRouter中直接使用
const Content = withRouter (
  (props) => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
  </div>
  )
)
const Page = (props) => (
    <div>
      路由导出参数-title:
      <p>
        <Content></Content>
      </p>
    </div>
  )
export default Page