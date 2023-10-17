import React from 'react'
import './resetpassword.css'
import CS from '../../assets/images/logo.png'
import Profile from '../../assets/images/small.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Resetpassword = () => {
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
            <input type="password" name="password" placeholder="Password" required=""/>

            <input type="password" name="confirm_password" placeholder="Confirm Password" required=""/>

            <a type="submit" href="/signin" class="signing">Save</a>                   
        </div>
    </div>
    )
}

export default Resetpassword