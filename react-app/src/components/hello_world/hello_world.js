import React, { Component } from 'react';

/**
 * 
 * @param  props :string,禁止修改props，以下为纯函数
 */
function FunCom(props){
    return <span>fun组件{props.date}</span>;
}

class Hello extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'欧阳锋',
            age:62,
            location:'西北',
            date:new Date(),
        };
        console.log('Hello构造器');
    }

    componentDidMount() {
        console.log('生命周期：componentDidMount，组件被输出渲染后运行，可放异步请求');
    }
  
    componentWillUnmount() {
        console.log('生命周期：componentWillUnmount');
    }

    render() {
        return (
            <div className="DiyHello">
                <div>姓名：{this.state.name}</div>
                <div>年龄{this.state.age}</div>
                <div>地理位置：{this.state.location}</div>
                <div>日期：{this.state.date.toLocaleTimeString()}</div>
        </div>
        );
    }
}

export {Hello,FunCom};