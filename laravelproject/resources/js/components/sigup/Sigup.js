import React, { Component } from 'react'
import './Sigup.css'
import axios from 'axios'

export default class Register extends Component {
    constructor(){
        super()
        this.state={
            name :'',
            email:'',
            password:'',
            natur:'',
        }
    }
  submit()
  {
      
      axios.post('sigup',this.state)
  }
    render() {    
        return (
          <body>
          <div>
              <div class="boxparent">
                  <div id="login-box">
                     <div class="left-box">
                            <h1> Sign Up</h1>
                            <form >
                            <input type="text" name="name" onChange={(item)=>{this.sateState({name:item.target.value})}} placeholder="Username"/>
                            <input type="text" name="email" onChange={(item)=>{this.sateState({email:item.target.value})}} placeholder="Email"/>
                            <input type="password" name="password" onChange={(item)=>{this.sateState({password:item.target.value})}} placeholder="Password"/>    
                            <input type="text" name="natur" onChange={(item)=>{this.sateState({natur:item.target.value})}} placeholder="prof/etudiant"/> 
                            <br />  
                            <input type="submit" name="signup-button" value="Sign Up" onClick={()=>{this.submit()}}    />
                            </form>
                      </div>   
                        <div class="right-box">
                            <span class="signinwith">Sign in with<br/>Social Network</span>   
                            <button class="social facebook">Log in with Facebook</button>    
                            <button class="social twitter">Log in with Twitter</button> 
                            <button class="social google">Log in with Google+</button>            
                         </div>
                              <div class="or">OR</div>
                         </div>
                </div>
          </div>
          </body>
        )
    }
}
