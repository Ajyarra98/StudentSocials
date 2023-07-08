import React from 'react'
import ManageBusinessOwners from '../ManageBusinessOwners'
import SchoolAdminNavBar from '../navbars/SchoolAdminNavBar'

const SchoolAdminBusiness = () => {
    return (
        <div >
            <SchoolAdminNavBar/>
            <div className="right">
                <ManageBusinessOwners/>
            </div>
            
        </div>
    )
}

export default SchoolAdminBusiness
