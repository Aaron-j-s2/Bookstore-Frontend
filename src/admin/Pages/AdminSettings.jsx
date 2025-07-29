import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { Label, Textarea, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Button } from "flowbite-react";
function AdminSettings() {
  return (
     <div>
        <AdminHeader/>
           <div className="row flex h-200">
          <div className=" flex flex-col items-center">
            <AdminSidebar/>
                     </div>
          <div className="col bg-amber-50 w-400 pt-15">
                  <h1 className='text-center mt-2 font-bold text-3xl me-25'>Settings</h1>
            <div className="flex">
                <div className='basis-150 pt-20 ps-20 '>
                    <p className='text-justify mb-10'>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus assumenda suscipit, doloribus omnis fuga vero dolorem necessitatibus blanditiis odio autem excepturi fugiat temporibus asperiores explicabo quos? Obcaecati, rerum excepturi?
                    Nihil nostrum eligendi error possimus dolores nulla adipisci natus, explicabo sint consequatur provident saepe pariatur. Numquam sed ullam iste cumque qui! Voluptas, repellat perferendis dolorem officia sunt iste culpa sequi.
                    Tenetur impedit corrupti culpal </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit dolore nobis! Amet magnam esse aut reiciendis! Vitae odio sunt ullam, aperiam, consequatur repudiandae nesciunt optio provident autem, error Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem accusantium sed animi veritatis! Laboriosam magnam reprehenderit beatae ratione ad ipsum asperiores. Explicabo quas odio officia ullam consequatur earum </p>
                   </div>
                   <div className='basis-150 p-10 '>
                     <form className="bg-amber-950 rounded p-5 ms-20 pt-5">
                        <div className="max-w-md">
                          <div className="md-2">
                           <label htmlFor="profile">
                             <input id='profile' type="file" style={{display:'none '}} />
                            <img src="https://icon-library.com/images/admin-icon-png/admin-icon-png-18.jpg" width={'200px'}  className="ms-25" alt="" />
                           </label>
                          </div>

                         <div className="mb-2 block">
                           <Label htmlFor="name">Your Name</Label>
                         </div>
                         <TextInput id="name" type="text"  placeholder="John Doe" required />
                       </div>
                       <div className="max-w-md">
                         <div className="mb-2 block">
                           <Label htmlFor="email4">Your email</Label>
                         </div>
                         <TextInput id="email4" type="email" icon={HiMail} placeholder="name@bookcoats.com" required />
                       </div>
                       <div className="max-w-md">
                         <div className="mb-2 block">
                           <Label htmlFor="comment">Your message</Label>
                         </div>
                        <TextInput id="email4" type="password" icon={HiMail} placeholder="password" required />

                       </div>
                     <div className='flex justify-evenly my-5'>
                        <Button className='!bg-amber-900 '>Reset</Button>
                          <Button className='!bg-amber-900 '>Update</Button>
                     </div>
                     </form>
                   </div>
                 
                 </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSettings