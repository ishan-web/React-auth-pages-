import React from 'react'
import './signin.css'
import CS from '../../assets/images/logo.png'



const Signin = () => {
    return (
        <div className="cont">
            <div className="logo_box">
                <img src={CS} alt="creationsoft logo" className="logo" />
            </div>

            <div className="body_form">
                <p>Signin to your Account! Sign In</p>
                    <input type="text" name="txt" placeholder="User name" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
                <a href="/forgot_password">Forgot Password?</a>
                <a type="submit" href="/" class="signing">Sign In</a>   
            </div>
        </div>
    )
}
export default Signin