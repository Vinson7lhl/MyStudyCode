import React, { Component } from 'react';

/**
 * 
 * @param  props :string,禁止修改props，以下为纯函数
 */
function IsLogin(props){
    if(props.isWelcome){
        return <Welcome/>;
    }
    return <Notwelcome/>;
}

function Welcome(){
    return <span>欢迎小李子</span>;
}

function Notwelcome(){
    return <span>请登录</span>;
}

function UserList(props){
    const liDoms=props.users.map(perData=>{
        return <li key={'Key'+perData}>{perData}</li>;
    });
    return liDoms;
}

class Hello extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'欧阳锋',
            age:62,
            location:'西北',
            date:new Date(),
            selectedValue:'黑龙江'
        };
        this.userArray=['张三','李四'];
        // 这个绑定this不是必须的，如下写法
        //this.changeName=this.changeName.bind(this);
        console.log('Hello构造器');
    }

    componentDidMount() {
        console.log('生命周期：componentDidMount，组件被输出渲染后运行，异步请求');
    }
  
    componentWillUnmount() {
        console.log('生命周期：componentWillUnmount');
    }

    /**
     * 如果删除绑定this的语法，可写成如下方式（仅限在react脚手架app中，因为这里默认是开启的。）
     * changeName=e=>{
        // 必须在函数中显式写阻止事件
        e.preventDefault();
        this.setState({name:'洪七公'});
    }
     */
    changeName(newName,e){
        // 必须在函数中显式写阻止事件
        this.setState({name:newName});
    }

    // 修改表单的input时绑定函数
    inputChangeName=e=>{
        this.setState({name:e.target.value});
    }

    selectChange=e=>{
        this.setState({selectedValue:e.target.value});
    }

    fileChange=e=>{
        console.log('文件改变');
        console.log(this.inputFileDom.id);
    }

    render() {
        return (
            <div className="DiyHello">
                <div>姓名：{this.state.name}</div>
                <div>年龄{this.state.age}</div>
                <div>地理位置：{this.state.location}</div>
                <div>日期：{this.state.date.toLocaleTimeString()}</div>
                <div>籍贯：{this.state.selectedValue}</div>
                <button onClick={this.changeName.bind(this,'洪七公')}>修改name值</button>
                <ul>
                    <UserList users={this.userArray}></UserList>
                </ul>
                <div className='formTest'>
                    <input type='text' value={this.state.name} onChange={this.inputChangeName}/>
                    <select value={this.state.selectedValue} onChange={this.selectChange}>
                        <option value='黑龙江'>黑龙江</option>
                        <option value='吉林'>吉林</option>
                        <option value='辽宁'>辽宁</option>
                    </select>
                    <input id='file_input' type='file' ref={this_dom=>{this.inputFileDom=this_dom;}} onChange={this.fileChange} />
                </div>
        </div>
        );
    }
}

export {Hello,IsLogin};