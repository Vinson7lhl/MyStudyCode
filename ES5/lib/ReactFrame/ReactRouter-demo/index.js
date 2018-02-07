/*
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Boys from './modules/Boys'
import Girls from './modules/Girls'
 
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/boys" component={Boys}/>
      <Route path="/girls" component={Girls}/>
    </Route>
  </Router>
), document.getElementById('app'))
*/



import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, Redirect  } from 'react-router'

//导航
const App = React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">Inbox</Link></li>
				</ul>
				{this.props.children }
			</div>
		)
	}
})
/*
{this.props.children || <Home/>}
在this.props.children没有值的时候。通过<Dashboard/>渲染访问"/"时默认显示的组件
当然在后面有更优雅的方式解决
*/


//访问"/"显示的页面 
const Home = React.createClass({
  render() {
    return <h3>Welcome to the app!</h3>
  }
})

//访问"/abou"显示的页面
const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

//访问"/inbox"显示的页面
const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})


//路由切换
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox}>
				<Route path="messages/:id" component={Message} />
				<Redirect from="messages/:id" to="/messages/:id" />
			</Route>
		</Route>
	</Router>
), document.getElementById("app"))




/*
http://localhost:8080/#/about?_k=lp7p7x
http://localhost:8080/#/inbox?_k=y6nvnc


导入:   import { IndexRoute } from 'react-router'
添加：  <IndexRoute component={Dashboard} />    路由配置 
访问    http://localhost:8080/#/?_k=9s547r   默认显示的组件


导入:  import { Redirect } from 'react-router'
添加： <Redirect from="messages/:id" to="/messages/:id" /> 路由配置
http://localhost:8080/#/inbox/messages/:10?_k=3zkncp
修改成这样也可以访问
http://localhost:8080/#/inbox/messages/10?_k=3zkncp
*/