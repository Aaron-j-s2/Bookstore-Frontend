import React, { useEffect, useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { Card , Button} from "flowbite-react";
import { getAdminAllBookAPI, getAdminApprovedBookAPI, getAllUsersAdminAPI } from '../../services/allAPIs';



function AdminBooks() {
  const [bookStatus,setBookStatus]=useState(false)
  const [userStatus,setUserStatus]=useState(false)
  const [token,setToken]=useState('')
  const [books,setBooks]=useState([])
  const[approvedStatus,setApproveStatus]=useState('')
  const [userDetails,setUserDetails]=useState('')


  const getAllBookAdminAPI=async(token)=>{
     const reqHeader = {
                 Authorization : `Bearer ${token}`
             }
      const result= await getAdminAllBookAPI(reqHeader)
      console.log(result.data);
      setBooks(result.data)
      
  }


//get all users
const getAllUsers=async(token)=>{
     const reqHeader = {
                 Authorization : `Bearer ${token}`
             }

             try {
               const result= await getAllUsersAdminAPI(reqHeader)
      console.log(result);
      console.log(result.data);
      
      setUserDetails(result.data)
      setBookStatus(false);
       setUserStatus(true)
             } catch (error) {
              console.log(error);
              
             }
     
      
  }


  console.log(token);

  const handleApprove=async(data)=>{
     const reqHeader = {
                 Authorization : `Bearer ${token}`
             }

     try {
     
      const result= await getAdminApprovedBookAPI(data,reqHeader)
      console.log(result);
  
      setApproveStatus(true)
      getAllBookAdminAPI(token)
     
      
     } catch (error) {
      console.log(error);
      
     }

  }
  
  useEffect(() => {
  const Token = sessionStorage.getItem("token");
  setToken(Token);
  if (Token) {
     setBookStatus(true); 
    getAllBookAdminAPI(Token); 
   
  }
}, []);

  console.log(books);
  

  return (
    <div>
      <AdminHeader />
      <div className=" flex  ">
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
                <p onClick={() => getAllUsers(token) } className='border border-r-2  border-l-2 border-t-2 border-b-0 p-3 m-2'>Users</p>
              </div>


            </div>
            <div class="basis-128"></div>

          </div>
          <div className="flex-row">
            {
              bookStatus ?
                <div className='flex'>

                  <div className=' gap-11 grid grid-cols-3 ms-20 pt-11 '>



   {
     books.length > 0 ?  books.map(item=>(<div >
                      <Card
                        className="flex flex-wrap w-70 text-center !bg-orange-300 !border-white">

                        <img src={item.imageUrl} alt="" className='ps-4' width={200} />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.title}
                        </h5>
                        <p className="text-white text-xl">
                          Price:{item.price}
                        </p>
                        {
                          item.status=="pending" && <div className=''> <button onClick={()=>handleApprove(item)}className='bg-amber-900 text-white py-2 px-3  rounded  hover:bg-amber-700 '>Approve</button>  </div> 
                        }

                        {
                          item.status=="approved" && <img src="https://i.pinimg.com/originals/48/e4/8d/48e48d9087b7422af61ad9321f26fcf9.jpg" className='w-20 ' alt="" />
                        }
                
                      </Card>
                    </div>)) :'no books'
   }
                    



                   


                  </div>



                </div>
                :
                <div className='flex justify-center items-center flex-wrap gap-4 '>
                    {
                    userDetails.length>0 ? userDetails.map(item=>
                          <Card className="max-w-sm !bg-amber-50">
                                        <img src={item.profile == "" ? 'https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png' : `${item.profile}`} alt="" width={'50px'} height={'50px'} />

                    <h5 className="text-2xl font-bold tracking-tight !text-gray-900">
                      ID : {item._id}
                    </h5>
                    <h5 className="text-2xl font-bold tracking-tight !text-gray-900">
                      Name : {item.username}
                    </h5>
                    <h5 className="text-2xl font-bold tracking-tight !text-gray-900">
                      Email : {item.email}
                    </h5>
                   
                   
                  </Card>

                    ):"No Users"
                   }
     
                  </div>
            }

          </div>
        </div>

      </div>

    </div>




  )
}

export default AdminBooks
