import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import{
    BrowserRouter as Router,
    Route
  }from 'react-router-dom'

import Login from './login/Login'
import Contacte from './contacte/Contacte'
import Nav from './navbar/Nav'
import Home from './home/Home'
import Sigup from './sigup/Sigup'
import "./index.css"
import Prof from './prof/Prof';
import Cours from './cours/Cours';
import Etudiant from './etudiant/Etudiant';
import Test from './test/Test';
export default class Index extends Component {
    render() {
        return (
            <body>
               
            <Router>
            <div>
                <Route  path="/sigup" component={Sigup} />
                <Route exact path="/login"  component={Login}/>
                <Route  path="/contacte"  component={Contacte}/>
                <Route  path="/home"  component={Home}/>
                <Route  path="/prof"  component={Prof}/>
                <Route  path="/cours"  component={Cours}/>
                <Route  path="/etudiant"  component={Etudiant}/>
                <Route  path="/test"  component={Test}/>
                <Nav />
                
                 
            </div>
            </Router>
            </body>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
