import React from 'react';

import {Route,Switch} from 'react-router';

import Home from './components/common/Home';
import AboutPage from './components/common/AboutPage';
import { BrowserRouter } from 'react-router-dom';
import Book from './components/books/Book';
import  App from './components/App';

export default (
<BrowserRouter>
    <Switch>
    <Route exact path="/" component={App}>
    {/*  These are children of Route and all these aviable in the App.js using
    props.children*/}
      <Route  path="/" component={Home}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/books" component={Book}></Route>
    </Route>
    </Switch>
    </BrowserRouter>
   
  );