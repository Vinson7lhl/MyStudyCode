import React from 'react'
import { Route} from 'react-router'
import { BrowserRouter  } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/login-page';
import IndexPage from './pages/index-page';

const ROUTER = (
<BrowserRouter>
    <React.Fragment>
        <Route exact  path="/" component={App}/>
        <Route path="/login" component={LoginPage} />
        <Route path="/index/:id" component={IndexPage} />
    </React.Fragment>
</BrowserRouter>);

export default ROUTER;