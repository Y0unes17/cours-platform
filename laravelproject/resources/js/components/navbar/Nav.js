import React, { Component } from 'react'
import{
    BrowserRouter as Router,
    Route,
    Link
  }from 'react-router-dom';
  import "./Nav.css"
 import  logo from "../img/2.png"
export default class Nav extends Component {
    render() {
        return (
           
               
               <nav>
               
              <ul class ="nav">
              <img src={logo} width="250" height="80" />

                 <li><Link to="/sigup">Sigup</Link>  </li>                                 
                 <li><Link to="/login"> Login </Link > </li >
                 <li><Link to="/contacte"> Contacte </Link > </li >
                 <li><Link to="/home"> Home </Link > </li >
                
                    
                
                
                
        
                </ul>
                </nav>
                

               
        )
    }
}
