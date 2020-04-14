import React, { Component } from 'react';
import { connect } from 'react-redux'
import MyContext from '../pages/context_values'

import { Hello, IsLogin } from '../components/hello_world/hello_world';
import * as indexAction from '../action/index.action'

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init_data: {
                father_name: 'indexPage'
            }
        }
    }
    changeProps() {
        this.setState({ init_data: { father_name: '改变啦！！！' } })
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
                <Hello initData={this.state.init_data} diyClick={this.getDataFromChild}></Hello>
                <IsLogin isWelcome={true} />
                <button onClick={this.changeProps.bind(this)}>修改传入的props值</button>
                {/* <div>获取参数：{this.props.match.params.id}</div> */}
                {/* <Route path={`${this.props.match.url}/:userId`} component={ForgetPage}/> */}
                <p>从redux得到的数据{this.props.num}</p>
                <button onClick={this.changeReduxNum.bind(this, 7)}>改变redux值</button>
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
