import React from 'react'
import AddStudent from './AddStudent'
import SchoolAdminNavBar from './navbars/SchoolAdminNavBar'
import Students from './Students'

const ManageStudents = () => {
    return (
        <div>   
        <div >
            <h2>Manage Students List</h2>
            <AddStudent/>
            <div className="pt-20"></div>
            <h2>Students List</h2>
            <Students/>
        </div>
        </div>
    )
}

export default ManageStudents
