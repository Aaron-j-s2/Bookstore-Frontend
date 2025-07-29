import React, { useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'




import { RiDeleteBin5Line } from "react-icons/ri";

import { FaLocationDot } from "react-icons/fa6";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Modal, ModalFooter } from "flowbite-react";



function AdminCareers() {
   const [jobStatus,setJobStatus]=useState(false)
  const [viewStatus,setViewStatus]=useState(false)
  const [openModal, setOpenModal] = useState(false);

  return (
     <div>
      <AdminHeader />
      <div className="row flex h-150">
        <div className="col flex flex-col items-center">
          <AdminSidebar />
        </div>

        <div className="col bg-amber-50 h-200 w-400">
          <h1 className='text-4xl font-extrabold text-center mt-35 me-25'>Careers</h1>
          <div class="flex flex-row mt-5">
            <div class="basis-128"></div>
            <div class="basis-64">
              <div className="flex align-center">
                <p className={jobStatus?'border border-r-2 border-l-2 border-t-2 border-b-0 p-3 me-0.5':'border border-r-2 border-l-2 border-t-2 border-b-2 p-3 me-0.5'} onClick={()=>{setJobStatus(true);setViewStatus(false)}}>Job List</p>
                <p className={viewStatus?'border border-r-2 border-l-2 border-t-2 border-b-0 p-3 me-24':'border border-r-2 border-l-2 border-t-2 border-b-2 p-3 me-24'}onClick={()=>{setJobStatus(false);setViewStatus(true)}} >View Applicant</p>
              </div>
            </div>
            <div class="basis-128"></div>
          </div>
          <div className='flex-row'>
            {
              jobStatus?
              <div className=''>
                <div className='flex'>
                  <div className='flex'>
                     <div className="flex items-center justify-center my-10 ms-35">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-amber-900 rounded-r-lg hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-black"
          >
            🔍
          </button>
        </div>
      </div>
      <div className='mt-9.5 ms-150'>
        <button className='!bg-amber-800 px-4 py-2 rounded-4xl' onClick={() => setOpenModal(true)}>Add +</button>
      </div>
                  </div>
                  </div> 

                 <div className='shadow bg-amber-200 rounded-lg mx-65 mt-5'>
                         <div className='flex items-center justify-between px-6 py-4'>
                           <div className='basis-1/3'>
                             <h1 className='text-2xl text-center mt-2'>HR Assistant</h1>
                           </div>
                           <div>
                             <button
                               className='flex items-center gap-2 p-3 text-white bg-amber-900 rounded-lg hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-black'
                               onClick={() => setOpenModal(true)}
                             >
                               Delete <RiDeleteBin5Line className="ms-1 fs-2" />
                             </button>
                           </div>
                         </div>
                 
                         <hr className='mx-4' />
                 
                         <div className='px-6 py-4'>
                           <p className='flex items-center gap-2 text-ms font-bold'><FaLocationDot /> Location: Kochi</p>
                           <p className='text-ms'>Job type: Full-time</p>
                           <p className='text-ms'>Salary: ₹25,000 - ₹35,000</p>
                           <p className='text-ms'>Qualification: Any Degree</p>
                           <p className='text-ms'>Experience: 1+ year</p>
                           <p className='text-ms'>Description: Handle employee records, onboarding, and assist HR operations.</p>
                         </div>
                       </div>

                       <Modal show={openModal} onClose={() => setOpenModal(false)}>
                               <div className="bg-white rounded shadow-lg p-6">
                                 <h2 className="text-2xl font-semibold mb-6 text-center">Application Form</h2>
                                 <form className="space-y-6">
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     {[
                                       { name: 'fullName', label: 'Full Name', type: 'text' },
                                       { name: 'qualification', label: 'Qualification', type: 'text' },
                                       { name: 'email', label: 'Email', type: 'email' },
                                       { name: 'phone', label: 'Phone', type: 'tel' },
                                     ].map((field, idx) => (
                                       <div className="relative" key={idx}>
                                         <input
                                           type={field.type}
                                           name={field.name}
                                           required
                                           placeholder={field.label}
                                           className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-amber-700"
                                         />
                                         <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                                           {field.label}
                                         </label>
                                       </div>
                                     ))}
                                   </div>
                       
                                   <div className="relative">
                                     <textarea
                                       name="coverLetter"
                                       rows="4"
                                       placeholder="Cover Letter"
                                       className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-amber-700"
                                     ></textarea>
                                     <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                                       Cover Letter
                                     </label>
                                   </div>
                       
                                   <div>
                                     <label className="block mb-1 text-gray-700 font-medium">Upload Resume</label>
                                     <input
                                       type="file"
                                       name="resume"
                                       className="w-full border border-gray-300 p-2 rounded-md"
                                     />
                                   </div>
                       
                                   <ModalFooter>
                                     <div className="flex justify-end w-full gap-2 mt-4">
                                       <button
                                         type="reset"
                                         onClick={() => setOpenModal(false)}
                                         className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-700"
                                       >
                                         Reset
                                       </button>
                                       <button
                                         type="submit"
                                         onClick={() => setOpenModal(false)}
                                         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800"
                                       >
                                         Submit
                                       </button>
                                     </div>
                                   </ModalFooter>
                                 </form>
                               </div>
                             </Modal> 
              </div> :
              <div className='flex ms-5 mt-15'>

<div className="overflow-x-auto mx-10">
      <Table striped className='mt-10'>
        <TableHead className='!bg-amber-950'>
          <TableHeadCell className='!bg-amber-950 text-amber-100'>SI</TableHeadCell>
          <TableHeadCell className='!bg-amber-950 text-amber-100'>Job Title</TableHeadCell>
          <TableHeadCell className='!bg-amber-950 text-amber-100'>Name</TableHeadCell>
          <TableHeadCell className='!bg-amber-950 text-amber-100'>Qualification</TableHeadCell>
          <TableHeadCell className='!bg-amber-950 text-amber-100'>Email</TableHeadCell>
          <TableHeadCell className='!bg-amber-950 text-amber-100'>Phone</TableHeadCell>
          <TableHeadCell className='!bg-amber-950 text-amber-100'>Cover Letter</TableHeadCell>
          <TableHeadCell className='!bg-amber-950 text-amber-100'>Resume</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-amber-700 dark:bg-amber-800">
            <TableCell className="whitespace-nowrap font-medium  text-amber-900 dark:text-white">
              1
            </TableCell>
            <TableCell className=" font-medium text-amber-950 dark:text-white">Frontend Developer</TableCell>
            <TableCell className=" font-medium text-amber-950 dark:text-white">Ken</TableCell>
            <TableCell className=" font-medium text-amber-950 dark:text-white">Btech CS</TableCell>
            <TableCell className=" font-medium text-amber-950 dark:text-white">ken@gmail.com</TableCell>
             <TableCell className=" font-medium text-amber-950 dark:text-white">9876543210</TableCell>
            <TableCell className=" font-medium text-amber-950 dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, quae? Nostrum, ex. Consectetur eum esse eius fugit labore, voluptatum voluptatem excepturi quasi impedit blanditiis est eligendi illum sequi vitae nobis.</TableCell>
            <TableCell className=" font-medium text-amber-950 dark:text-white"><a href="">Resume</a></TableCell>
          </TableRow>
        
       
        </TableBody>
      </Table>
    </div>

              </div>
            }
          </div>
        </div>

      </div>

    </div>

  )
}

export default AdminCareers
