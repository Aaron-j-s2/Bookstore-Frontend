import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { IoMdSend } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

function Careers() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Header />
      <div >
        <h1 className='text-center text-amber-900 text-5xl m-10'> Careers</h1>

        <h2 className='text-2xl m-3'>Work with us;</h2>
        <p className='text-ms m-3 text-justify'>Join our team and be part of something exciting.
          We value creativity, dedication, and fresh ideas.
          Every day brings new opportunities to grow and learn.
          We believe in supporting each other and working as one team.
          Your skills and passion can make a real difference here.
          We welcome people from all backgrounds and experiences.
          Together, we strive to achieve great things.
          Let’s build a future full of possibilities.
          Discover how rewarding it can be to work with us!</p>
      </div>
      <div>
        <h1 className='text-center text-4xl text-amber-900'>Current Openings</h1>
      </div>


     <div class="flex items-center justify-center  my-10">
  <div class="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Search..."
      class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <button
      class="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-amber-900 rounded-r-lg hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-black"
    >
      🔍
    </button>
  </div>
</div>

<div className='mx-20 border-lg shadow bg-red-50'>
  <div className='flex'>
    <div className='basis-270'>
      <h1 className='text-2xl m-4 text-center text-amber-900' >HR  Assistant </h1>
    </div>
    <div>
      <button className='flex p-3 m-5 text-white bg-amber-900 rounded-lg hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-black' onClick={() => setOpenModal(true)}>Apply <IoMdSend /></button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}  > 
        <div className="bg-amber-50   rounded shadow-lg p-6 relative">
        
        <h2 className="text-2xl text-amber-900 font-semibold mb-4">Application form</h2>
        <form >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="border border-amber-900 p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              className="border border-amber-900 p-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="border border-amber-900 p-2 rounded w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="border border-amber-900 p-2 rounded w-full"
              required
            />
          </div>
          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            className="border border-amber-900 p-2 rounded w-full mt-4 h-24"
          ></textarea>
          <div className="mt-4">
            <label className="block  text-amber-900 mb-1">Resume</label>
            <input
              type="file"
              name="resume"
              className="w-full border border-amber-900 p-2  rounded"
            />
          </div>
           <ModalFooter>
          <div className="flex justify-end mt-6 gap-2">
            <button
              type="reset"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" onClick={() => setOpenModal(false)}
            >
              Reset
            </button>
            <button
              type="submit" onClick={() => setOpenModal(false)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </ModalFooter>
          
        </form>
      </div>      
      </Modal>
    </div>
  </div>
  <hr className='mx-2' />

  <div className='m-5 pb-6'>
    <p className='flex text-xl'><FaLocationDot />kochi</p>
    <p className='flex text-xl'>Job type:</p>
    <p className='flex text-xl'>Salary:</p>
    <p className='flex text-xl'>Qualification:</p>
    <p className='flex text-xl'>Experience:</p>
    <p className='flex text-xl'>Description:</p>

  </div>
</div>








      <Footer />
    </div>
  )
}

export default Careers
