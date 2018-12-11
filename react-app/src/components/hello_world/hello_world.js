import React, { Component } from 'react';
import './hello_world.css';

/**
 * 
 * @param  props :string,禁止修改props，以下为纯函数组件
 */
function IsLogin(props) {
    if (props.isWelcome) {
        return <Welcome />;
    }
    return <Notwelcome />;
}
//  纯函数组件
function Welcome() {
    return <span>欢迎小李子</span>;
}

function Notwelcome() {
    return <span>请登录</span>;
}

function UserList(props) {
    const liDoms = props.users.map(perData => {
        return <li key={'Key' + perData}>{perData}</li>;
    });
    return liDoms;
}

function InputChildren(props) {
    return (
        <div>
            <input id='ref_child_input' ref={props.inputRef} />
        </div>
    );
}

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '欧阳锋',
            age: 62,
            location: '西北',
            date: new Date(),
            selectedValue: '黑龙江',
            gender: '男',
            swim: false,
            running: false,
            tennis: false,
            buttonDisabled: true,
            domIsShow:false
        };
        this.userArray = ['张三', '李四'];
        this.sendFatherData = { father: '来自子组件数据' };
        // 这个绑定this不是必须的，如下写法
        // this.changeName=this.changeName.bind(this);
        console.log('Hello构造器');
        // post发送的数据
        this.postData = { name: '图灵', age: 27 };
        // 获取新的Red Dom(16.3+版本支持的新API,所以底下的代码会报错)
        // this.newRefDom=React.createRef();
        // console.log('新的refDom的ID：'+this.newRefDom.id);
    }

    componentDidMount() {
        console.log('钩子-componentDidMount')
        console.log(`父组件引用子dom，id为：${this.child_input_dom.id}`);
    }

    componentWillUnmount() {
        console.log('钩子-componentWillMount')
    }
    componentWillReceiveProps(nextProps) {
        console.log('钩子-componentWillReceiveProps')
        console.log(nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('钩子-shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('钩子-componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('钩子-componentDidUpdate')
    }

    /**
     * 如果删除绑定this的语法，可写成如下方式（仅限在react脚手架app中，因为这里默认是开启的。）
     * changeName=e=>{
        // 必须在函数中显式写阻止事件
        e.preventDefault();
        this.setState({name:'洪七公'});
    }
     */
    changeName(newName, e) {
        e.preventDefault();
        // 必须在函数中显式写阻止事件
        this.setState({ name: newName });
    }

    // 修改表单的input时绑定函数
    inputChangeName = e => {
        this.setState({ name: e.target.value });
    }

    selectChange = e => {
        console.log('event是什么？');
        console.log(e.target);
        this.setState({ selectedValue: e.target.value });
    }

    fileChange = e => {
        console.log('文件改变');
        console.log(this.inputFileDom.id);
    }

    chageRadio = e => {
        this.setState({ gender: e.target.value });
    }

    checkboxChange = e => {
        console.log('选中');
        const checkboxName = e.target.value,
            ischecked = e.target.checked;
        this.setState({ [checkboxName]: ischecked });
    }

    fakeClick = (e) => {
        this.props.diyClick(this.sendFatherData, e)
    }
    /**
     * 代码拆分时的webpack - code-split
     * module.exports = {
        entry: {
            main: './src/app.js',
        },
        output: {
            // `filename` provides a template for naming your bundles (remember to use `[name]`)
            filename: '[name].bundle.js',
            // `chunkFilename` provides a template for naming code-split bundles (optional)
            chunkFilename: '[name].bundle.js',
            // `path` is the folder where Webpack will place your bundles
            path: './dist',
            // `publicPath` is where Webpack will load your bundles from (optional)
            publicPath: 'dist/'
        }
        };
     */

    /**
     * Ajax-fetch 请求测试
     */
    mockAjax = () => {
        fetch('./mock', {
            method: 'post',
            body: JSON.stringify(this.postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                console.log(typeof res);
            })
            .catch(err => {
                console.log('错误');
                console.log(err);
            });
    }

    render() {
        return (
            <div className="DiyHello">
                <div>来自父级的数据：{this.props.initData.father_name}</div>
                <div className='userName'>姓名：{this.state.name}</div>
                <div>年龄{this.state.age}</div>
                <div>地理位置：{this.state.location}</div>
                <div>日期：{this.state.date.toLocaleTimeString()}</div>
                <div>籍贯：{this.state.selectedValue}</div>
                {/* <button onClick={this.changeName.bind(this, '洪七公')}>修改name值</button> */}
                <button onClick={this.changeName.bind(this,'洪七公')}>修改name值</button>
                <ul>
                    <UserList users={this.userArray}></UserList>
                </ul>
                <div className='formTest'>
                    <input type='text' value={this.state.name} onChange={this.inputChangeName} />
                    <select value={this.state.selectedValue} onChange={this.selectChange}>
                        <option value='黑龙江'>黑龙江</option>
                        <option value='吉林'>吉林</option>
                        <option value='辽宁'>辽宁</option>
                    </select>
                    <input id='file_input' type='file' ref={this_dom => { this.inputFileDom = this_dom; }} onChange={this.fileChange} />
                    <div>
                        性别：<input type='radio' name='gender' value='男' checked={this.state.gender === '男'} onChange={this.chageRadio} />男
                        <input type='radio' name='gender' value='女' checked={this.state.gender === '女'} onChange={this.chageRadio} />女
                        【所选性别为：{this.state.gender}】
                    </div>
                    <div>
                        爱好：<input type='checkbox' value='swim' checked={this.state.swim} onChange={this.checkboxChange} />游泳
                        <input type='checkbox' value='running' checked={this.state.running} onChange={this.checkboxChange} />跑步
                        <input type='checkbox' value='tennis' checked={this.state.tennis} onChange={this.checkboxChange} />网球
                    </div>
                    <button disabled={this.state.buttonDisabled} onClick={this.fakeClick}>sendFatherData</button>
                    <button onClick={this.mockAjax}>Fetch发送请求</button>
                    {/* <div ref={this.newRefDom} id="new_ref_dom">新的ref函数获取DOM</div> */}
                </div>
                <p>ref 子组件</p>
                <InputChildren inputRef={dom => {
                    this.child_input_dom = dom;
                }} />
                dom显示测试
                {
                    this.state.domIsShow ? <div>显示dom</div>  : <div>不显示dom</div>
                }
            </div>
        );
    }
}

export { Hello, IsLogin };