import React, { useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { Card , Button} from "flowbite-react";



function AdminBooks() {
  const [bookStatus,setBookStatus]=useState(false)
  const [userStatus,setUserStatus]=useState(false)

  return (
    <div>
      <AdminHeader />
      <div className=" flex ">
        <div className="col flex flex-col items-center  ">
          <AdminSidebar />
        </div>

        <div className="col bg-amber-50 w-400">
          <h1 className='text-4xl font-extrabold text-center mt-10'>All Books</h1>
          <div class="flex flex-row mt-5">
            <div class="basis-128"></div>
            <div class="basis-64">
              <div className="flex">
                <p className='border border-r-2  border-l-2 border-t-2 border-b-0 p-3 m-2 ' onClick={() => { setBookStatus(true); setUserStatus(false) }}>Book List</p>
                <p onClick={() => { setBookStatus(false); setUserStatus(true) }} className='border border-r-2  border-l-2 border-t-2 border-b-0 p-3 m-2'>Users</p>
              </div>


            </div>
            <div class="basis-128"></div>

          </div>
          <div className="flex-row">
            {
              bookStatus ?
                <div className='flex'>

                  <div className=' gap-11 grid grid-cols-3 ms-20 pt-11 '>




                    <div >
                      <Card
                        className="flex flex-wrap w-70 text-center !bg-orange-300 !border-white">

                        <img src="https://atlanticbooks.com/cdn/shop/files/9788126941445_701x1078.jpg?v=1745410048" alt="" className='ps-4' width={200} />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Under the Eye of the Big Bird
                        </h5>
                        <p className="text-white text-xl">
                          Price:2000rs
                        </p>
                      </Card>
                    </div>



                    <div >
                      <Card
                        className="flex flex-wrap w-70 text-center !bg-amber-800 !border-white">

                        <img src="https://atlanticbooks.com/cdn/shop/files/9781529085662_701x1078.jpg?v=1737526813" alt="" className='ps-4' width={200} />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Under the Eye of the Big Bird
                        </h5>
                        <p className="text-white text-xl">
                          Price:2000rs
                        </p>
                      </Card>
                    </div>


                    <div >
                      <Card
                        className="flex flex-wrap w-70 text-center !bg-orange-300 !border-white">

                        <img src="https://atlanticbooks.com/cdn/shop/files/9781035019977_699x1078.jpg?v=1742560314" alt="" className='ps-4' width={200} />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Under the Eye of the Big Bird
                        </h5>
                        <p className="text-white text-xl">
                          Price:2000rs
                        </p>
                      </Card>
                    </div>




                    <div >
                      <Card
                        className="flex flex-wrap w-70 text-center !bg-amber-800 !border-white">

                        <img src="https://atlanticbooks.com/cdn/shop/files/9781529085662_701x1078.jpg?v=1737526813" alt="" className='ps-4' width={200} />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Under the Eye of the Big Bird
                        </h5>
                        <p className="text-white text-xl">
                          Price:2000rs
                        </p>
                      </Card>
                    </div>


                  </div>



                </div>
                :
                <div className='flex gap-11 grid grid-cols-3 ms-20 pt-11'>
                  <Card className="!bg-white w-60">
                      <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="" />
                      <h1>name</h1>
                      <h1>job</h1>
                  </Card>

                  <Card className="!bg-white w-60">
                      <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="" />
                  </Card>

                  <Card className="!bg-white w-60">
                      <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="" />
                  </Card>

                  <Card className="!bg-white w-60">
                      <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="" />
                  </Card>
                  
                </div>
            }

          </div>
        </div>

      </div>

    </div>




  )
}

export default AdminBooks
