import React, { Component } from 'react';

import { Hello, IsLogin } from '../components/hello_world/hello_world';

class IndexPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            init_data : {
                father_name : 'indexPage'
            }
        }
    }
    changeProps () {
        this.setState({init_data:{father_name : '改变啦！！！'}})
    }
    render() {
        return (
            <React.Fragment>
                <Hello initData={this.state.init_data} diyClick={this.getDataFromChild}></Hello>
                <IsLogin isWelcome={true} />
                <button onClick={this.changeProps.bind(this)}>修改传入的props值</button>
                {/* <div>获取参数：{this.props.match.params.id}</div> */}
                {/* <Route path={`${this.props.match.url}/:userId`} component={ForgetPage}/> */}
            </React.Fragment>
        );
    }
    getDataFromChild = (data, e) => {
        console.log(`来自子组件的数据：${data}`);
    }
}

export default IndexPage;
