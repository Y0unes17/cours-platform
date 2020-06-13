import React, { Component } from 'react'
import "./Contacte.css"
export default class Contacte extends Component {
   
    render() {
        return (
            <div>
                <div class="dlogin">
                     <div class="loginbox">
                     <h1>Contacte US</h1>
                                    <form>
                                    <p>Username</p>
                                    <input type="text" name="name" placeholder="Enter Username" ></input>
                                    <p>Email</p>
                                    <input type="text" name="name" placeholder="Enter mail" ></input>
                                    <p>Message</p>
                                    <textarea cols="50" rows="2" placeholder="Message"></textarea>
                                    <input type="submit" name="name" value="Send"  />
            
                                    </form>
                    </div>
                 </div> 
            </div>
        )
    }
}
