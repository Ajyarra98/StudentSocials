import React from 'react'
import SchoolAdminNavBar from '../navbars/SchoolAdminNavBar'
import Posts from '../Posts'
const SchoolAdminPosts = () => {
    return (
        <div >
            <SchoolAdminNavBar/>
            <div className="right">
              <Posts/>
            </div>
            
        </div>
    )
}

export default SchoolAdminPosts
