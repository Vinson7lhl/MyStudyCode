import React, { Component } from 'react';

/**
 * 
 * @param  props :string,禁止修改props，以下为纯函数
 */
function FunCom(props){
    return <span>fun组件{props.date}</span>;
}

class Hello extends Component {
    constructor(){
        super();
        console.log('Hello构造器');
    }
    render() {
        return (
            <div className="DiyHello">
                hello world! 李宏磊；
        </div>
        );
    }
}

export {Hello,FunCom};