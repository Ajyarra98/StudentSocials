import React from 'react'
import SuperAdminNavBar from '../navbars/SuperAdminNavBar'
import ManageStudents from '../ManageStudents'

const SuperAdminBusiness = () => {
    return (
        <div >
            <SuperAdminNavBar/>
            
            <div className="right">
                <ManageStudents/>
           
            
        </div>
            
        </div>
    )
}

export default SuperAdminBusiness