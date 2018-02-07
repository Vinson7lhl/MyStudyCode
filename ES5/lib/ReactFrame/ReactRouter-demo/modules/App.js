import React from 'react'
import { Router, Route, hashHistory,Link } from 'react-router'
export default React.createClass({
    render() {
		return (
				<div>
					<h1>Ghettohub Issues</h1>
					<ul role="nav">
					  <li><Link to="/boys">男神</Link></li>
					  <li><Link to="/girls">女神</Link></li>
					</ul>

					{this.props.children}
				</div>
		)
	}
})