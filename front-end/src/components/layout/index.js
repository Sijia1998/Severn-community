import React, { Component, Fragment } from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Header from '../header/header';
import ReactMarkDown from '../markdown/markdown';

class Layout extends Component {
  render() {
    return <div>
      <Router>
        <div>
          <Route path="/" component={Header}></Route>
          <Route path="/editor" component={ReactMarkDown}></Route>
        </div>
      </Router>
      {/* <Header></Header> 
      <ReactMarkDown></ReactMarkDown> */}
    </div>
  }
}
export default Layout;
