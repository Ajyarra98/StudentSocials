import React from 'react'
import AddStudent from './AddStudent'
import SchoolAdminNavBar from './navbars/SchoolAdminNavBar'
import Students from './Students'

const ManageSchoolAdmins = () => {
    return (
        <div>   
        <div >
            <h2>Manage School Admins List</h2>
            <AddStudent/>
            <div className="pt-20"></div>
            <h2>School Admin List</h2>
            <Students/>
        </div>
        </div>
    )
}

export default ManageSchoolAdmins
