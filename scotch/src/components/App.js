import React from 'react';
import {Link} from 'react-router-dom';
import './css/home.css'
import '../index.css';

const App = (props) => {
 
    return (


    <div className="container ">
      <div className="row">
            <div className="col-md-12 col-sm-12 header">
                  <a className="navbar-brand" href="https://github.com/vijayella/ReactJS">Welcome to React</a>
            </div>
            
            <div className="col-mod-3 col-sm-3 leftnav">
                    <ul className="nav navbar-nav">
                    <li><Link className="navbar  link" to="/">Home</Link></li>
                    <li><Link  className="navbar  link" to="/about">About</Link></li>
                    <li><Link  className="navbar  link" to="/esscript">ES6 Features</Link></li>
                    {/* <li><Link  className="navbar  link" to="/jsx">JSX Syntax</Link></li> */}
                    <li><Link  className="navbar  link" to="/components">Components</Link></li>
                    {/* <li><Link  className="navbar  link" to="/states">States & Props</Link></li> 
                    <li><Link  className="navbar  link" to="/eventhandler">Event Handlers</Link></li>*/}
                    <li><Link  className="navbar  link" to="/hocs">HOC</Link></li>
                    <li><Link  className="navbar  link" to="/refs">Refs</Link></li>
                    <li><Link className="navbar  link" to="/books">Redux React Sync Data</Link></li>
                    <li><Link  className="navbar  link" to="/cart">Redux React Async Data</Link></li>
                    <li><Link className="navbar link" to="/burger">Burger Project</Link></li>
                    </ul>
            </div>
      
                <div className="col-mod-6 col-sm-6">
                  {/* Each smaller components */}
                {props.children}
                </div> 
                <div className="col-md-12 col-sm-12 text-center header">
                    @CopyRights reserved by vijayakumar Yella 
            </div>           
          </div>
    </div>
    );
  }

export default App;
