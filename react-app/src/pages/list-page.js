import React ,{ Component } from 'react';
import {Link,Route} from 'react-router-dom';

class ListPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            <li><Link to='detail/1'>产品1</Link></li>
            <li><Link to='detail/2'>产品2</Link></li>
        </div>);
    }
}

export default ListPage;
