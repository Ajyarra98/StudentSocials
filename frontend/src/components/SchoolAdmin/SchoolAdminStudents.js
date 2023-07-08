import React from 'react'
import SchoolAdminNavBar from '../navbars/SchoolAdminNavBar'
import ManageStudents from '../ManageStudents'
const SchoolAdminStudents = () => {
    return (
        <div >
            <SchoolAdminNavBar/>
            <div className="right">
                <ManageStudents/>
            </div>
            
        </div>
    )
}

export default SchoolAdminStudents
