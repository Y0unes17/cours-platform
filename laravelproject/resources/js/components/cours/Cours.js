import React, { Component } from 'react'
import  pdf from "../img/pdf.png"
import './Cours.css'
import axios from 'axios'
import{
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  }from 'react-router-dom'
export default class Cours extends Component {
    constructor(){
        super()
        this.state={
            name :'',  
            id:'',
                 
          
           
        }
    }
  submit()
  {
      
     axios.post('cours',this.state)
            
  }
  del()
  {
      
     axios.delete('coursd',this.state)
            
  }
    render() {
        return (
            <div class="cours">
                <p>
                <img src={pdf} width="50" height="50" />
                </p>
                <h1>Gestion de cours</h1>
                                 <form >
                                    
                                    <input type="text" name="name" onChange={(item)=>{this.sateState({name:item.target.value})}} placeholder="Enter name cours" ></input>                                  
                                    <input type="text" name="id" onChange={(item)=>{this.sateState({id:item.target.value})}} placeholder="Enter id" ></input>
                                    <input type="file" name="file" onChange={(item)=>{this.sateState({idfile:item.target.value})}} placeholder="uploda file " ></input>
                                    <input type="submit" name="signup-button" value="Ajouter" onClick={()=>{this.submit()}} ></input>
                                    <input type="submit" name="submit1" value="Modifier" />
                                    <input type="submit" name="submit2" value="Supprimer" oonClick={()=>{this.del()}} />
                                    
                                 </form>
            </div>
        )
    }
}
