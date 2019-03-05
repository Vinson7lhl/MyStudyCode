
import React, { Component } from 'react'
import { withRouter } from 'next/router'
// 导入api模拟数据
import fetch from 'isomorphic-unfetch'

// 导入css 
// import '../comp/imgList.scss';
/**
 * 此页面的问题是一旦刷新，会报出404的错误，这是因为在index文件中——服务端渲染时以 as 后面的路径进行查找静态文件，但实际是不存在的。
 */
// router属性只能在withRouter中直接使用
// const Content = withRouter(
//   (props) => (
//     <div>
//       <h1>{props.router.query.title}</h1>
//       <p>This is the blog post content.</p>
//     </div>
//   )
// )

export default class Page extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
  }

  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    console.log('呵呵呵呵呵')
    return { movie_detail: show }
  }

  render() {
    return (
      <div>
        {/* <div>
          路由导出参数-title:
              <Content></Content>
        </div> */}
        <div>电影详情</div>
        <div className='movieDetail'>
            Detail:
            {this.props.movie_detail.name}
            {this.props.movie_detail.summary.replace(/<[/]?p>/g, '')}
            <img src={this.props.movie_detail.image.medium}/>
        </div>
      </div>
    )
  }
}