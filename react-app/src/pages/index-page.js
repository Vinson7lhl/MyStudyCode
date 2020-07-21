import React, { Component } from 'react';
import { connect } from 'react-redux'
import MyContext from '../pages/context_values'

import { Hello, IsLogin } from '../components/hello_world/hello_world';
import * as indexAction from '../action/index.action'

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.changeFromFather = this.changeFromFather.bind(this)
        this.state = {
            init_data: {
                father_name: 'indexPage',
                from_father: 'hello'
            }
        }
    }
    changeProps() {
        this.setState({ init_data: { father_name: '改变啦！！！' } })
    }

    changeFromFather() {
        this.setState({init_data:{
            father_name: 'indexPage2',
            from_father: '你好啊，王小波！'
        }})
    }

    componentDidMount() {
        console.log(this.props);
        // let value = this.context.contextValue;
        // console.log('上下文值：' + value)
    }
    componentWillUnmount() {
    }
    componentWillReceiveProps() {
    }
    changeReduxNum(new_num) {
        this.props.getNewNum(new_num)
    }
    render() {
        return (
            <React.Fragment>
                <Hello initData={this.state.init_data} fatherState={this.state.init_data} diyClick={this.getDataFromChild}></Hello>
                <IsLogin isWelcome={true} />
                <button onClick={this.changeProps.bind(this)}>修改传入的props值</button>
                {/* <div>获取参数：{this.props.match.params.id}</div> */}
                {/* <Route path={`${this.props.match.url}/:userId`} component={ForgetPage}/> */}
                <p>从redux得到的数据{this.props.num}</p>
                <button onClick={this.changeReduxNum.bind(this, 7)}>改变redux值</button>
                <button onClick={this.changeFromFather}>改变父级状态是否一定会改变子组件状态？</button>
                <div>{this.state.init_data.from_father}</div>
            </React.Fragment>
        );
    }
    getDataFromChild = (data, e) => {
        console.log(`来自子组件的数据：${data}`);
    }
}
/**
 * 获取上下文值
 * @param {} state 
 */
IndexPage.contextType = MyContext;

/**
 * 
 * @param {初始化的状态值} state 
 */
const mapStateToProps = (state) => {
    return {
        num: state.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNewNum: (num) => {
            dispatch(indexAction.setAddNum(num))
        }
    }
}

const VisibleIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage)

export default VisibleIndex;
