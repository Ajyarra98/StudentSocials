import React from 'react'
import { Link } from 'react-router-dom'
import '.././css/Navbar.css'

const SchoolAdminNavBar = () => {
  return (
    <>
        <nav className="menu" tabIndex="0">
            <div className="smartphone-menu-trigger"></div>
            <header className="avatar">
                   
                <h3>Mercado Escobar</h3>
            </header>
                <ul>
                  <Link to="/schooladmin"><li tabIndex="0" className="icon-customers"><span>Dashboard</span></li></Link>
                  <Link to="/schooladminstudents"><li tabIndex="0" className="icon-dashboard"><span>Manage Students</span></li></Link>
                  <Link to="/schooladminbusiness"><li tabIndex="0" className="icon-users"> <span>Manage Business</span></li></Link>
                  <Link to="/schooladminclubs"><li tabIndex="0" className="icon-settings"><span>Clubs</span></li></Link>
                  <Link to="/schooladminposts"><li tabIndex="0" className="icon-settings"><span>Posts</span></li></Link>

              </ul>
        </nav>
    </>
  )
}

export default SchoolAdminNavBar