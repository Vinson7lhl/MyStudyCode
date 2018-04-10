import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * 从这里开始引导根组件APP
 */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
