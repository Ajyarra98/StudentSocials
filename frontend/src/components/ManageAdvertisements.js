import React from 'react'
import ExploreAds from './ExploreAds'
import PostAdvertisement from './PostAdvertisement'

const ManageAdvertisements = () => {
    return (
        <div>   
        <div >
            <h2>Manage Advertisements </h2>
            <PostAdvertisement/>
            <div className="pt-20"></div>
            <h2>Advertisement List</h2>
            <ExploreAds/>
        </div>
        </div>
    )
}

export default ManageAdvertisements
