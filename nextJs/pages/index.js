
import React, { Component } from 'react'
// 导入api模拟数据
import fetch from 'isomorphic-unfetch'

import Header from '../comp/header'
import LinkButton from '../comp/linkButton'
import Link from 'next/link'



/**
 * 
 * @param {as 相当于路由映射} props 
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
    this.state = {
      list_data: []
    }
  }

  componentDidMount() {
    // this.getMovieList();
  }

  async getMovieList() {
    const res_data = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res_data.json();
    this.setState({ list_data: data })
    console.log(data)
  }

  static async getInitialProps(context) {
    const res_data = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res_data.json();
    // this.setState({ list_data: data })
    // 此处不会打印在客户端，而是底下的控制台中
    console.log(data)
    return {movie_list:data}
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
        {/* 电影列表 */}
        <div className='movieList'>
          <ul>
            {
              this.props.movie_list.map(item => <li key={item.show.id}>
                <Link as={`/p/${item.show.id}`} href={`/post?id=${item.show.id}`}>
                  <a>{item.show.name}</a>
                </Link>
              </li>
              )
            }
          </ul>
        </div>
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