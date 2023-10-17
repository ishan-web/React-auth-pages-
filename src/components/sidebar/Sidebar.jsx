import React from 'react'
import './sidebar.css'
import CS from '../../assets/images/logo.png'

const Sidebar = () => {
    return(
        <header>
            <div className="topleft">
                <img src={CS} alt="creationsoft logo" className="logo" />
            </div>

            <div className="nav">
                <list>
                    <ul>
                        <a href="#">Dashboard</a>
                    </ul>
                    <ul>
                        <a href="#">Send SMS</a>
                    </ul>
                    <ul>
                        <a href="#">SMS Report</a>
                    </ul>
                    <ul>
                        <a href="#">Balance Statement</a>
                    </ul>
                    <ul>
                        <a href="#">SMS Settings</a>
                    </ul>
                    <ul>
                        <a href="#">SMS API</a>
                    </ul>
                    <ul>
                        <a href="#">Log Out</a>
                    </ul>
                </list>
            </div>
        </header>
    )
}

export default Sidebar