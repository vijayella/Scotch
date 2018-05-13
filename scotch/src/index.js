import React from 'react';
import ReactDOM from 'react-dom';
//import { Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import { Router } from 'react-router-dom';
//import { browserHistory} from "react-router";
import { BrowserRouter as Router} from "react-router-dom";
//import createBrowserHistory from 'history/createBrowserHistory'

//import routes from './route';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
//import createBrowserHistory from 'history/createBrowserHistory'

import {Route} from 'react-router';

import Home from './components/common/Home';
import AboutPage from './components/common/AboutPage';
//import { Router } from 'react-router-dom';
import Book from './components/books/Book';
import HocPoc from './components/HocPoc';
//const history = createBrowserHistory();
import Components from './components/common/Components'; 
import BurgerLayout from './components/burger/layout/burgerLayout';
/**
 * The createStore method from redux is used to create the store.
 */
import RefUsage from './components/common/RefUsage';

const store = createStore(rootReducer,{});
/**
 * All you need to do is import the Provider component
 * from react-redux and wrap your entry point component with it:
 * Using This 
 * store.dsipatch(), store.subscribe(),store.getState().
 * 
 * Not only do we wrap with Provider, 
 * we can now provide the store to the Provider
 * that will in turn give the descendants of
 * the this entry component access to the store.
 */



//const history = createBrowserHistory()
ReactDOM.render(
<Provider store={store}>
<Router >
<App>

    {/*  These are children of Route and all these aviable in the App.js using
    props.children*/}
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/books" component={Book}></Route>
      <Route path="/components" component={Components}></Route>
      <Route path="/hocs" component={HocPoc}></Route>
      <Route path="/refs" component={RefUsage}></Route>
      <Route path="/burger" component={BurgerLayout}></Route>
</App>

 
</Router> 


</Provider>, document.getElementById('root'));
registerServiceWorker();
