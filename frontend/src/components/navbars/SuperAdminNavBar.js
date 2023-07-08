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
                  <Link to="/admin"><li tabIndex="0" ><span>Dashboard</span></li></Link>
                  <Link to="/adminstudents"><li tabIndex="0"><span>Manage Students</span></li></Link>
                  <Link to="/adminbusiness"><li tabIndex="0" > <span>Manage Business Owners</span></li></Link>
                  <Link to="/adminschools"><li tabIndex="0" ><span>Manage schools</span></li></Link>
                  {/* <Link to="/adminchats"><li tabIndex="0" ><span>Chats</span></li></Link> */}

              </ul>
        </nav>
    </>
  )
}

export default NavBar