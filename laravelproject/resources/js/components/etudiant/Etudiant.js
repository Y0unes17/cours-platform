import React, { Component } from 'react'

import a from "../img/10.png"
import b from "../img/11.png"
import c from "../img/12.png"
import d from "../img/13.jpg"
import e from "../img/14.png"
import f from "../img/15.png"
import g from "../img/16.png"
import h from "../img/17.png"
import k from "../img/18.png"

import './Etudiant.css'
import{
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
export default class Etudiant extends Component {
    render() {
        return (
            <div class="etud">
               <h1>choisissez votre cours </h1>
               <tabel>
                    <tr>
                    <td><Link to="/test" ><img src={b} width="190" height="230" /></Link ></td>  
                        <td><Link to="#" ><img src={a} width="190" height="230" /></Link ></td>                                              
                        <td><Link to="#" ><img src={f} width="200" height="250" /></Link ></td>
                        <td><Link to="#" ><img src={c} width="200" height="230" /></Link ></td>
                    </tr>
                    <tr>
                        <td><Link to="#" ><img src={d} width="200" height="250" /></Link ></td>
                        <td><Link to="#" ><img src={g} width="200" height="250" /></Link ></td>
                        <td><Link to="#" ><img src={h} width="200" height="250" /></Link ></td>
                        <td><Link to="#" ><img src={k} width="200" height="250" /></Link ></td>
                        
                    </tr>
                    
                </tabel>
            </div>
        )
    }
}
