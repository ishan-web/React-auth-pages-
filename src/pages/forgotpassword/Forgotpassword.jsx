import React from 'react'
import './forgotpassword.css'
import CS from '../../assets/images/logo.png'
import Profile from '../../assets/images/small.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Forgotpassword = () => {
    return (
        <div className="cont">
            <div className="logo_box">
                <img src={CS} alt="creationsoft logo" className="logo" />
            </div>
            <div className="profile_box">
                <img src={Profile} alt="profile" className="profile" />
            </div>
            <div className="user">
                <AccountBoxIcon fontSize="medium" color="primary" />
                <label>Creation Soft</label>
            </div>


            <div className="body_form">
                <p>The reset link will be sent to the email address below</p>
					<input type="email" name="email" placeholder="Email" required=""/>

                <a type="submit" href="/reset_password" class="signing">Reset Password</a>                   
            </div>
        </div>
    )
}

export default Forgotpassword