import React from 'react'
import Clubs from '../Clubs'
import StudentNavBar from '../navbars/StudentNavBar'
import StudentClubsUtil from './StudentClubsUtil'
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

const StudentClubs = () => {
    return (
        <div >
            <StudentNavBar/>
            <div className="right">
             <Link to="/studentaddclub"  ><Button label="Add Club" onClick=""></Button>
</Link>

              <h2>My Clubs</h2>
                <Clubs/>
              <h2>Join Clubs</h2>
              <StudentClubsUtil/>
            </div>
            
        </div>
    )
}

export default StudentClubs
