
import React, { Component } from 'react'
import {withRouter} from 'next/router'

// import ImgList from '../comp/imgList'
// 导入css 
import '../comp/imgList.scss';
import Header from '../comp/header'
/**
 * 此页面的问题是一旦刷新，会报出404的错误，这是因为在index文件中——服务端渲染时以 as 后面的路径进行查找静态文件，但实际是不存在的。
 */
// router属性只能在withRouter中直接使用
const Content = withRouter (
  (props) => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
  </div>
  )
)

export default class Page extends Component{
  constructor(props) {
      super(props);
      this.state = {
          list_data: []
      }
  }
  componentDidMount() {
      this.getDataList();
  }

  async getDataList() {
      const res_data = await fetch('https://api.tvmaze.com/search/shows?q=batman');
      const data = await res_data.json();
      this.setState({ list_data: data });
      console.log(`Show data fetched. Count: ${data.length}`)
  }

  render() {
      return (
          <div>
            <div>
              路由导出参数-title:
              <Content></Content>
            </div>
              <div>从server端拿回的数据</div>
              <div className='imgContainer'>
                  <ul>
                      {
                          this.state.list_data.map(item => <li className='picBlock' key={item.show.id}><img src={item.show.image.medium} /></li>)
                      }
                  </ul>
              </div>
          </div>
      )
  }
}