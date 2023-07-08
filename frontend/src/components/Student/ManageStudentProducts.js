import React from 'react'
import StudentProducts from './StudentProducts'
import StudentNavBar from '../navbars/StudentNavBar'
import AddProduct from './AddProduct'

const ManageProducts = () => {
    return (
        <div>
      <StudentNavBar />
      <div className="right">
        <h2>My products</h2>
        <StudentProducts type="Return"/>
        <h2>Buy products</h2>
        <StudentProducts type="Buy"/>
        <AddProduct></AddProduct>
      </div>
    </div>
    )
}

export default ManageProducts
