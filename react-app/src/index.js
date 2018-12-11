import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducer/index.reducer'
/**
 * 公共的css文件
 */
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/**
 * 从这里开始引导根组件APP
 */
let store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
