import React, { Component } from 'react'
// 导入api模拟数据
import fetch from 'isomorphic-unfetch'

// 导入css 
import './imgList.scss';

export default class ImgList extends Component {
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
        console.log(res_data);
        const data = await res_data.json();
        this.setState({ list_data: data })
        console.log('返回的数据为：');
        console.log(data);
    }

    render() {
        return (
            <div>
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