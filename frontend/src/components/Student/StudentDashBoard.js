import React from "react";
import Reports from "../Reports";
import StudentNavBar from "../navbars/StudentNavBar";

const StudentDashBoard = () => {
  return (
    <div>
      <StudentNavBar />
      <div className="right">
        <Reports />
      </div>
    </div>
  );
};

export default StudentDashBoard;
