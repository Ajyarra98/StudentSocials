import React from 'react'
import SuperAdminNavBar from '../navbars/SuperAdminNavBar'
import ManageSchoolAdmins from '../ManageSchoolAdmins'
const SuperAdminBusiness = () => {
    return (
        <div >
            <SuperAdminNavBar/>
            <div className="right">
                <ManageSchoolAdmins/>
            </div>
            
        </div>
    )
}

export default SuperAdminBusiness