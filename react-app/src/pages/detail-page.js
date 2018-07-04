import React ,{ Component } from 'react';

class DetailPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            详情页，参数为：{this.props.match.params.num};
        </div>);
    }
}

export default DetailPage;
