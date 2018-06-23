import React, { Component } from 'react';

import { Hello, IsLogin } from '../components/hello_world/hello_world';


class IndexPage extends Component {
    render() {
        return (
        <React.Fragment>
            <Hello diyClick={this.getDataFromChild}></Hello>
            <IsLogin isWelcome={true} />
            <div>获取参数：{this.props.match.params.id}</div>
        </React.Fragment>
        );
    }
}

export default IndexPage;
