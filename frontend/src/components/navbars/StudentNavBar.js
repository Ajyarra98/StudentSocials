import React from 'react'
import { Link } from 'react-router-dom'
import '.././css/Navbar.css'

const NavBar = () => {
  return (
    <>
        <nav className="menu" tabIndex="0">
            <div className="smartphone-menu-trigger"></div>
            <header className="avatar">    
                <h3>Mercado Escobar</h3>
            </header>
                <ul>
                <Link to="/studentdashboard"><li tabIndex="0" ><span>Dash Board </span></li></Link>

                  <Link to="/studentclubs"><li tabIndex="0" ><span>Manage Clubs</span></li></Link>
                  <Link to="/cart"><li tabIndex="0" ><span> Cart</span></li></Link>
                  <Link to="/studentproducts"><li tabIndex="0" > <span>Manage Products</span></li></Link>
                  <Link to="/studentchat"><li tabIndex="0" > <span> Chat</span></li></Link>
                  <Link to="/profile"><li tabIndex="0" > <span> Profile</span></li></Link>

              </ul>
        </nav>
    </>
  )
}

export default NavBar