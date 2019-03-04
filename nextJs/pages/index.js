
import React, { Component } from 'react'

import Header from '../comp/header'
import LinkButton from '../comp/linkButton'
import Link from 'next/link'
import ImgList from '../comp/imgList'



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
    super(props);
    this.state = {
      list_data: []
    }
  }

  componentDidMount() {
    this.getDataList();
  }

  async getDataList () {
    const res_data = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    console.log(res_data);
    const data = await res_data.json();
    this.setState({list_data:data})
    console.log('返回的数据为：');
    console.log(data);
  }

  render() {
    return (
      <div>
        <Header />
        <p>Hello Next.js</p>
        跳转
        <PostLink id='Hello Next.js' title='Hello Next.js'></PostLink>
        <PostLink id='Learn Next.js is awesome' title='Learn Next.js is awesome'></PostLink>
        <PostLink id='Deploy apps with Zeit' title='Deploy apps with Zeit'></PostLink>
        <Link href='./about'>
          <LinkButton onClick=''></LinkButton>
        </Link>
        <ImgList />
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