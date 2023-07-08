// import logo from './logo.svg';
import "./App.css";
import Landing from "./components/Landing";

import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Chats from "./components/Chats.js";
import Products from "./components/Products";
import MyProducts from "./components/MyProducts";
import PostAdvertisement from "./components/PostAdvertisement";
import ExploreAds from "./components/ExploreAds";
import AddStudent from "./components/AddStudent";
import Students from "./components/Students";
import ManageStudents from "./components/ManageStudents";
import ManageBusinessOwners from "./components/ManageBusinessOwners.js";
import Clubs from "./components/Clubs";
import SchoolAdminNavBar from "./components/navbars/SchoolAdminNavBar";
import StudentNavBar from "./components/navbars/StudentNavBar";
import BusinessOwnerNavBar from "./components/navbars/BusinessOwnerNavBar";
import SuperAdminNavBar from "./components/navbars/SuperAdminNavBar";
import NavBar from "./components/navbars/NavBar";
import Cart from './components/Student/Cart'
import Reports from "./components/Reports";
// import SchoolAdminNavBar from './components/navbars/SchoolAdminNavBar';
import ManageAdvertisements from "./components/ManageAdvertisements";
import ManageSchoolAdmins from "./components/ManageSchoolAdmins";

import BusinessOwners from "./components/BusinessOwners";
import ManageStudentProducts from "./components/Student/ManageStudentProducts";
import StudentClubs from "./components/Student/StudentClubs";
import StudentAddClub from "./components/Student/StudentAddClub";

import StudentChat from "./components/Student/StudentChat";
import StudentDashBoard from "./components/Student/StudentDashBoard";
import BusinessDashboard from "./components/BusinessOwners/BusinessDashboard";
import BusinessProducts from "./components/BusinessOwners/BusinessProducts";
import BusinessAdvertisements from "./components/BusinessOwners/BusinessAdvertisements";
import SuperAdminChats from "./components/BusinessOwners/Businesschats"


import SchoolAdminDashboard from "./components/SchoolAdmin/SchoolAdminDashboard"
import SchoolAdminBusiness from "./components/SchoolAdmin/SchoolAdminBusiness"
import SchoolAdminClubs from "./components/SchoolAdmin/SchoolAdminClubs"
import SchoolAdminPosts from "./components/SchoolAdmin/SchoolAdminPosts"
import SchoolAdminStudents from "./components/SchoolAdmin/SchoolAdminStudents"

import SuperAdminDashboard from "./components/SuperAdmin/SuperAdminDashboard"
import SuperAdminBusiness from "./components/SuperAdmin/SuperAdminBusiness"

import SuperAdminSchools from "./components/SuperAdmin/SuperAdminSchools"
import SuperAdminStudents from "./components/SuperAdmin/SuperAdminStudents"
import StudentProfile from "./components/Student/StudentProfile";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/landing" exact>
          <Landing />
        </Route>
        <Route path="/about" exact>
          <AboutUs />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/chat" exact>
          <Chats />
        </Route>
        <Route path="/addProduct" exact>
          <AddProduct />
        </Route>
        <Route path="/addProduct" exact>
          <AddProduct />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/myproducts" exact>
          <MyProducts />
        </Route>
        <Route path="/postad" exact>
          <PostAdvertisement />
        </Route>
        <Route path="/ads" exact>
          <ManageAdvertisements />
        </Route>
        <Route path="/addStudents" exact>
          <AddStudent />
        </Route>
        <Route path="/students" exact>
          <Students />
        </Route>
        <Route path="/manageStudents" exact>
          <ManageStudents />
        </Route>
        <Route path="/manageBusinessOwners" exact>
          <ManageBusinessOwners />
        </Route>
        <Route path="/manageSchoolAdmins" exact>
          <ManageSchoolAdmins />
        </Route>
        <Route path="/clubs" exact>
          <Clubs />
        </Route>
        <Route path="/reports" exact>
          <Reports />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/studentproducts" exact>
          <ManageStudentProducts />
        </Route>
        <Route path="/studentclubs" exact>
          <StudentClubs />
        </Route>
        <Route path="/studentchat" exact>
          <StudentChat />
        </Route>
        <Route path="/studentdashboard" exact>
          <StudentDashBoard />
        </Route>
        <Route path="/studentaddclub" exact>
          <StudentAddClub />
        </Route>
        <Route path="/profile" exact>
          <StudentProfile />
        </Route>
        <Route path="/businessowner" exact>
          <BusinessDashboard />
        </Route>
        <Route path="/businessproducts" exact>
          <BusinessProducts />
        </Route>
        <Route path="/businessads" exact>
          <BusinessAdvertisements />
        </Route>
        <Route path="/adminchats" exact>
          <SuperAdminChats/>
        </Route>

        
        <Route path="/admin" exact>
          <SuperAdminDashboard />
        </Route>
        <Route path="/adminstudents" exact>
          <SuperAdminStudents />
        </Route>
        <Route path="/adminbusiness" exact>
          <SuperAdminBusiness />
        </Route>
        <Route path="/adminschools" exact>
          <SuperAdminSchools />
        </Route>
        {/* <Route path="/adminchats" exact>
          <SuperAdminChats />
        </Route> */}

        <Route path="/schooladmin" exact>
          <SchoolAdminDashboard />
        </Route>
        <Route path="/schooladminstudents" exact>
          <SchoolAdminStudents />
        </Route>
        <Route path="/schooladminbusiness" exact>
          <SchoolAdminBusiness />
        </Route>
        <Route path="/schooladminclubs" exact>
          <SchoolAdminClubs />
        </Route>
        <Route path="/schooladminposts" exact>
          <SchoolAdminPosts />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
