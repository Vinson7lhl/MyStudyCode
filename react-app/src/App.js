import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, } from 'react-router-dom';

import LoginPage from './pages/login-page';
import IndexPage from './pages/index-page';
import ForgetPassword from './pages/forget-page';
import ListPage  from './pages/list-page';
import DetailPage from './pages/detail-page';

import './App.css';

/**
 * 声明根组件（类声明）
 */
class App extends Component {
  constructor() {
    super();
    console.log('app构造器');
  }

  getDataFromChild(data, e) {
    console.log(e);
    console.log(data);
  }

  /**
   * 注意：router内部只有一个根节点
   * 在路由4+的版本中，路由不再单独剥离，而是注入组建中，当做组建的一部分-如下
   */
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/index">index</Link></li>
            <li><Link to='/list'>list</Link></li>
          </ul>
          {/* 
              路由的输出模块
           */}
          <Route exact path='/' component={LoginPage} />
          <Route path='/index' component={IndexPage} />
          <Route path='/forgetPassword' component={ForgetPassword} />
          <Route path='/list' component={ListPage} />
          <Route path='/detail/:num' component={DetailPage} />
        </div>
      </Router>
    );
  }
}

export default App;
