
import React, { Component } from 'react'
// 导入api模拟数据
import fetch from 'isomorphic-unfetch'


export default class Page extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json();
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