import ReactDOM from 'react-dom';
import ROUTER from './router';
/**
 * 公共的css文件
 */
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/**
 * 从这里开始引导根组件APP
 */
ReactDOM.render(ROUTER, document.getElementById('root'));
registerServiceWorker();
