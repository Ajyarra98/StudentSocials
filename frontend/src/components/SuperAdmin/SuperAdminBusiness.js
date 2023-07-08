import React from 'react'
import SuperAdminNavBar from '../navbars/SuperAdminNavBar'
import ManageBusinessOwners from '../ManageBusinessOwners'

const SuperAdminBusiness = () => {
    return (
        <div >
            <SuperAdminNavBar/>
            <div className="right">
                <ManageBusinessOwners/>
            </div>
            
        </div>
    )
}

export default SuperAdminBusiness