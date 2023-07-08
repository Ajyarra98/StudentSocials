import React from "react";
import Reports from "../Reports";
import StudentNavBar from "../navbars/StudentNavBar";
import AddClub from "./AddClub";

const StudentAddClub = () => {
  return (
    <div>
      <StudentNavBar />
      <div className="right" >
        <AddClub />
      </div>
    </div>
  );
};

export default StudentAddClub;
