import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { BiLogIn } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaPowerOff } from "react-icons/fa";



function AdminHeader() {
  return (
    <div>
      <Navbar fluid  className='!bg-orange-800'>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/123/small_2x/old-book-watercolor-illustration-png.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold !text-amber-50 ">Paper Garden</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Link to={'/Login'}><Button className='!bg-orange-100 !text-lg !text-amber-950'>Logout <FaPowerOff /></Button></Link>
        <NavbarToggle />
      </div>
      
      
    </Navbar>
    <div> <marquee behavior="" direction="" className='bg-orange-100 h-8'>
      <p className='my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet dicta rerum officiis! Dolorum molestias iure eligendi officia ipsum quos eveniet itaque, esse deserunt. Nobis molestias illo recusandae eos nulla.</p>
    </marquee>

    </div>


    </div>
  )
}

export default AdminHeader
