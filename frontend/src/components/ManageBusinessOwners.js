import React from 'react'
import AddBusinessOwners from './AddBusinessOwner'
import AddStudent from './AddStudent'
import BusinessOwners from './BusinessOwners'
import SchoolAdminNavBar from './navbars/SchoolAdminNavBar'
import Students from './Students'

const ManageBusinessOwners = () => {
    return (
        <div>
        <div className="">
            <h2>Manage BusinessOwners List</h2>
            <AddBusinessOwners/>
            <div className="pt-20"></div>
            <h2>BusinessOwners List</h2>
            <BusinessOwners/>
        </div>
        </div>
    )
}

export default ManageBusinessOwners
