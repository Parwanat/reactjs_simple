import React from 'react'

export default function LeftNavbar() {
    return (
        <header className="main-header">
            <a href="index.html" className="logo-holder">
                <img src="/assets/images/logo.png" alt="logo" /></a>
            <div className="nav-button" id="open-button">
                <span className="menu-global menu-top"></span>
                <span className="menu-global menu-middle"></span>
                <span className="menu-global menu-bottom"></span>
            </div>
            <div className="show-share isShare"><img src="images/share.png" alt="" /></div>
        </header>
    )
}
