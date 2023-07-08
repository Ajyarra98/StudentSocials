import React from 'react'
import SchoolAdminNavBar from '../navbars/SchoolAdminNavBar'
import Reports from '../Reports'
const SchoolAdminDashboard = () => {
    return (
        <div >
            <SchoolAdminNavBar/>
            <div className="right">
            <Reports/>
            </div>
            
        </div>
    )
}

export default SchoolAdminDashboard
