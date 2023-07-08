import React, {useState} from "react";
import ContactUs from "./ContactUs";
import './css/Landing.css'
import HeaderPage from './HeaderPage'
import Hamburger from '../components/assets/Images/hamburger-menu.jpg'
const Landing = () => {
  const [mobmenu , setMobmenu] = useState(false);
  return (
    <div>
      <div class="nav-div">
        <div class="logo">LOGO</div>
        <div class='menu_icon'><img class='img_class' onClick={() =>  setMobmenu(true)} src={Hamburger} alt='Hamburger'></img></div>
        {mobmenu && 
        <div className="mobile-menu">
       <ul className="mob-menu">
       <a href="#home">
            <li class="nav-mob-item">Home</li>
          </a>
          <a href="#home">
            <li class="nav-mob-item">Home</li>
          </a>
          <a href="#home">
            <li class="nav-mob-item">Home</li>
          </a>
          <a href="#home">
            <li class="nav-mob-item">Home</li>
          </a>
       </ul>
      
        </div>
        }
        <ul class="nav-list">
          <a href="#home">
            <li class="nav-item">Home</li>
          </a>
          <a href="./about">
            <li class="nav-item">About</li>
          </a>
          <a href="./services">
            <li class="nav-item">Services</li>
          </a>
          <a href="https://blog.vxy3582.uta.cloud/">
            <li class="nav-item">Blog</li>
          </a>
          <a href="./contact">
            <li class="nav-item">Contacts</li>
          </a>
		      <a href="./login">
            <li class="nav-item">Login</li>
          </a>
		      <a href="./signup">
            <li class="nav-item">Register</li>
          </a>
          <a href="./studentdashboard">
            <li class="nav-item">Students</li>
          </a>
          <a href="./businessowner">
            <li class="nav-item">Business</li>
          </a>
          <a href="./schooladmin">
            <li class="nav-item">School</li>
          </a>
          <a href="./admin">
            <li class="nav-item">Super Admin</li>
          </a>
        </ul>
      </div>
     
      <div id="home">
        <HeaderPage/>
        <div class="text-center heading">Home</div>
        <div class="dummy-text">
        Your real shopping partner is StudentSocials.
Get your shopping list and take advantage of the services and experience offered here.
        </div>
      </div>
      <div id="about">
        <div class="text-center heading">About</div>
        <div class="dummy-text">
        You can find products and accessories on our website that are primarily needed for your study. Product availability is updated by business owners for students to purchase.Business owners that join receive a platform where they can add their own products for sale after doing so.
Businesses will also advertise here in the center, and promotions will be broadcast here.
        </div>
      </div>
      <div id="services">
        <div class="text-center heading">Services</div>
        <div class="dummy-text">
        <b>Shopping Complex</b><br/>
This website offers you the goods and materials that are most frequently needed for your studies. Businesses update their inventory so that students can purchase it.

<br/>
<b>A marketplace for students</b><br/>
Students can sell their own stuff that are no longer in use to other students in addition to purchasing goods and necessities from company owners.
<br/>
<b>Clubs</b><br/>
Students who are interested in cooperating or exchanging ideas form clubs and invite one another to join them, or they simply join clubs that already exist.
<br/>
<b>Posts</b><br/>
The substance of student posts is highly critical and instructive for other students. Additionally, some pupils have the opportunity to post their own thoughts.
<br/>
<b>Advertisements</b><br/>
By running advertisements and campaigns, business owners promote themselves and grow their companies.
<br/>
<b>Manage Users</b>
<br/>
Certain users have the authority to manage other schools,users and their posts.
<br/>
        </div>
      </div>
      <div id="contact">
        <div class="text-center heading">Contact</div>
        <div class="dummy-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
          nulla nec purus luctus posuere. Fusce tempus dignissim orci id
          facilisis. Phasellus et justo at risus aliquam egestas eget.
		  <ContactUs/>
        </div>
      </div>
    </div>
  );
};

export default Landing;

