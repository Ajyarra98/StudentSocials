import React from 'react'
import Clubs from '../Clubs'
import SchoolAdminNavBar from '../navbars/SchoolAdminNavBar'

const SchoolAdminClubs = () => {
    return (
        <div >
            <SchoolAdminNavBar/>
            <div className="right">
                <Clubs/>
            </div>
            
        </div>
    )
}

export default SchoolAdminClubs
