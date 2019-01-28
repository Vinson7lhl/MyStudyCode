
import React, { Component } from 'react'

import Header from '../comp/header'
import LinkButton from '../comp/linkButton'
import Link from 'next/link'

/**
 * 
 * @param {as 相当于路由映射} props 
 * 但问题是一旦刷新，会报出404的错误，这是因为服务端渲染时以 as 后面的路径进行查找静态文件，但实际是不存在的。
 */
const PostLink = (props) => (
  <div>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <p>{props.title}</p>
    </Link>
  </div>
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
        <PostLink id='index1' title='你好 Next.js'></PostLink>
        <PostLink id='index2' title='Learn Next.js is awesome'></PostLink>
        <PostLink id='index3' title='Deploy apps with Zeit'></PostLink>
        <Link href='./about'>
          <LinkButton onClick=''></LinkButton>
        </Link>
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