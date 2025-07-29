import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminHome() {
  return (
    <div>
      <AdminHeader/>
      <div className="row flex w-full">

      <div className="col  flex flex-col items-center "> <AdminSidebar/> 
      </div>
      <div className='col'>
        <div className="flex gap-33 m-15 ">
        <div className='bg-red-500 w-50 h-25 shadow shadow-lg text-center p-3 rounded-lg text-xl text-orange-100'>
          <p>Total Number of Books</p>
          <p>100+</p>
        </div>
        <div className='bg-green-500  w-50 h-25 shadow shadow-lg text-center p-3 rounded-lg text-xl text-orange-100'>
          <p>Total Number of Users</p>
          <p>100+</p>
        </div>

        <div className='bg-blue-500  w-50 h-25 shadow shadow-lg text-center p-3 rounded-lg text-xl text-orange-100'>
          <p>Total Number of Employees</p>
          <p>100+</p>
        </div>
        
        
         </div>
      </div>

      </div>
     
    </div>
  )
}

export default AdminHome
