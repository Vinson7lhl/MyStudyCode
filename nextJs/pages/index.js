
import React, { Component } from 'react'

import Header from '../comp/header'
import Link from 'next/link'

const PostLink = (props) => (
  <Link href={`/post?title=${props.title}`}>
    <p>{props.title}</p>
  </Link>
)
export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <p>Hello Next.js</p>
        跳转
        <PostLink title='你好 Next.js'></PostLink>
        <PostLink title='Learn Next.js is awesome'></PostLink>
        <PostLink title='Deploy apps with Zeit'></PostLink>
      </div>
    )
  }
}
// const Index = () => (
//     <div>
//       <Header/>
//       <p>Hello Next.js</p>
//     </div>
//   )

//   export default Index