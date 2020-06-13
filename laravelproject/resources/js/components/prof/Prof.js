import React, { Component } from 'react'
import './Prof.css'
import{
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import  logout from "../img/logout.png"
import Cours from '../cours/Cours';
export default class Prof extends Component {
    render() {
        return (
            <div>
              <div class="prof" >
                
                <h1>Bienvenu a session prof </h1>
                <form >
                <div class="menu">
                
                <ul>
                 <li><Link to="/cours" > Gestion des cours &ensp;&ensp;&ensp; </Link > </li >  
                       
                 <li><Link to="/login"> Gestion des tests &ensp;&ensp;&ensp;</Link > </li >

                 <li><Link to="/login"> Gestion des notes &ensp;&ensp;&ensp; </Link > </li >
             
                 </ul>

                

                 <div class="img">
                 <Link to="/home">
                     
                 <img src={logout} width="50" height="50"  />
                 </Link>
                 
                 </div>
                 
                </div>
                </form>
                </div>  



            </div>
        )
    }
}
