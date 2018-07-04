import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
/**
 * 公共的css文件
 */
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/**
 * 从这里开始引导根组件APP
 */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
