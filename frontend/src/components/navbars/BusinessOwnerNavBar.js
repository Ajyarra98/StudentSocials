import React from "react";
import { Link } from "react-router-dom";
import ".././css/Navbar.css";

const BusinessOwnerNavBar = () => {
  return (
    <>
      <nav className="menu" tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <h3>Mercado Escobar</h3>
        </header>
        <ul>
        <Link to="/businessowner">
            <li tabIndex="0" className="icon-users">
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/businessproducts">
            <li tabIndex="0">
              <span>Products</span>
            </li>
          </Link>
          <Link to="/businessads">
            <li tabIndex="0" className="icon-dashboard">
              <span>Advertisements</span>
            </li>
          </Link>
          <Link to="/adminchats"><li tabIndex="0" ><span>Chats</span></li></Link>
        </ul>
      </nav>
    </>
  );
};

export default BusinessOwnerNavBar;
