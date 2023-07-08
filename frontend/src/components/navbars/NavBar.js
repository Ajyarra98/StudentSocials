import React from "react";
import { Link } from "react-router-dom";
import ".././css/Navbar.css";

const NavBar = () => {
  return (
    <>
      <div class="">
        <div class="sidebar-wrapper">
          <div class="sidebar">
            <nav>
              <ul class="menu">
                <li>
                  <Link to="/managestudents">
                    <li tabIndex="0" className="icon-customers">
                      <span>Manage Students</span>
                    </li>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/manageBusinessOwners">
                    <li tabIndex="0" className="icon-dashboard">
                      <span>Manage Business Owners</span>
                    </li>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/clubs">
                    <li tabIndex="0" className="icon-users">
                      {" "}
                      <span>Moderate Clubs/Posts</span>
                    </li>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/reports">
                    <li tabIndex="0" className="icon-settings">
                      <span>Generate Reports</span>
                    </li>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
