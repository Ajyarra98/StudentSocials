import React from "react";
import Reports from "../Reports";
import StudentNavBar from "../navbars/StudentNavBar";
import Profile from "../Profile";
import AddStudent from "../AddStudent";
const StudentProfile = () => {
  return (
    <div>
      <StudentNavBar />
      <div className="right">
        <Profile />
        <h2> Edit Account</h2>
        <AddStudent/>
      </div>
    </div>
  );
};

export default StudentProfile;
