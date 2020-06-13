import React, { Component } from 'react';
import "./Login.css"
import axios from 'axios' 

import{
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  }from 'react-router-dom'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            name :"",        
            password:"",
           
        }
    }
  

submit()
{
    
  axios.get('login',this.state)
    console.log(this.state)
     
  
}
    render() {
        return (
            <div>
               <div class="login">
                    <div class="loginbox">
                        
                            <h1>Login Here</h1>
                                 <form >
                                    <p>Username</p>
                                    <input type="text" name="name" onChange={(item)=>{this.setState({name:item.target.value})}} placeholder="Enter Username" ></input>
                                    <p>Password</p>
                                    <input type="password" name="password" onChange={(item)=>{this.setState({password:item.target.value})}} placeholder="Enter Password" ></input>
                                    <input type="submit" name="submit" value="Login"  onClick={()=>{this.submit()}}/>
                                    
                                    <a href="#">Lost your password?</a><br />
                                    
                                   
                                 </form>
      
                    </div>
                 </div> 
            </div>
        )
    }
}

