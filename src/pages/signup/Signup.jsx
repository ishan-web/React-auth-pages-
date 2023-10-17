import React from 'react'
import './signup.css'
import CS from '../../assets/images/logo.png'



const Signup = () => {
    return (
        <div className="cont">
            <div className="logo_box">
                <img src={CS} alt="creationsoft logo" className="logo" />
            </div>

            <div className="body_form">
                <p>Create a new Account! Sign Up</p>
                    <input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
                <a type="submit" href="/signin" class="signing">SignIn</a>                   
            </div>
        </div>
    )
}
export default Signup