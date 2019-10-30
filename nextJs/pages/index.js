
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
    <Link href={`/post?title=${props.title}`}>
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

  /**
   * 这个函数相当于一个生命周期钩子，但优于所有钩子函数执行，这样才能保证做到server端的渲染。
   * 与此同时会将异步返回的数据注入到props中。
   * context这个上下文对象包括
   * 
   * req: HTTP请求对象（服务端渲染独有）
   * res: HTTP响应对象（服务端渲染独有）
   * pathname: URL中的路径部分
   * query：URL中的查询字符串部分解析出的对象
   * err：错误对象，如果在渲染时发生了错误
   * xhr：XMLHttpRequest对象（客户端渲染独有）
   * 
   * @param {*} context 
   */
  static async getInitialProps(context) {
    const res_data = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res_data.json();
    // this.setState({ list_data: data })
    // 每次reload页面都会在server端（终端）打印一次
    console.log('哈哈哈哈哈')
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
        <Link href='/about'>
          关于我们
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