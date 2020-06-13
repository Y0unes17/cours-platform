import React, { Component } from 'react'
import{
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import './Home.css'
import  new1 from "../img/new.gif"
export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="home" >
                
                <h1>Apprenez à votre <br />rythme</h1>
                <p>
                Étudiez à tout moment le sujet que vous souhaitez.<br />
                Découvrez des milliers de cours .
                </p> 
                <br />
                <input data-purpose="home-quick-search-box" name="q" placeholder="Que souhaitez-vous apprendre"></input>
                <button type="submit" ></button>
                
                </div>
                <div class="box">
                <img src={new1} width="50" height="50" />
                <h3>                
                    Choisissez parmi de cours en ligne. 
                    
                </h3>
                <div class="ull">
                <ul>
                 <li><Link to="/login"> learn HTML from from beginner to pro   </Link > </li >                               
                 <li><Link to="/login"> HTML et CSS cours complet  </Link > </li >
                 <li><Link to="/login"> Java pour tous  </Link > </li >
                 <li><Link to="/login"> Apprendre Javascript: Cours Javascript Complet</Link ></li>
                 <li><Link to="/login"> Debute avec c# </Link > </li >                              
                 <li><Link to="/login"> Markiting cours complet  </Link > </li >  
                 </ul>
                 </div>
                </div>
            </div>
            
        )
    }
}
