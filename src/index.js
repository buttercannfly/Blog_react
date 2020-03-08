import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Md from './md';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router,Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Route component={App} path="/"/>
        <Route path='/article/:order_id' component={Md}/>
    </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
