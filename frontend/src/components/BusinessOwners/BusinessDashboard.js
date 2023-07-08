import React from 'react'
import Reports from "../Reports";
import BusinessOwnerNavBar from "../navbars/BusinessOwnerNavBar";

const BusinessDashboard = () => {
    return (
        <div >
            <BusinessOwnerNavBar/>
            <div className="right">
            <Reports/>
            </div>
        </div>
    )
}

export default BusinessDashboard
