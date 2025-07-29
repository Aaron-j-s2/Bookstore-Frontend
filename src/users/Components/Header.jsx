import React, { useEffect, useState } from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';
import { serverURL } from '../../services/serverURL';
import { Dropdown, DropdownItem } from "flowbite-react";
function Header() {
   //to hold token
    const [token,setToken]=useState("")
    const [userData,setUserData]=useState({})
    useEffect(()=>{
      //check token in sessionStorage?
     let usertoken= sessionStorage.getItem("token")
     //get userDetails
     let userDetails=JSON.parse(sessionStorage.getItem("existingUser"))
     console.log(userDetails);
     
   
     
      if(usertoken){
        setToken(usertoken)//assign token to the state
        setUserData(userDetails.profile)
      }
    },[token])
    console.log(token);
  return (
    <div>
   <Navbar fluid  className='!bg-orange-800'>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/123/small_2x/old-book-watercolor-illustration-png.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold !text-amber-50 ">Paper Garden</span>
      </NavbarBrand>
      <div className="flex md:order-2">
{
  token ?
 <div>


<Dropdown
  inline
  label={
    <div className="p-[2px] bg-brown-600 rounded-full hover:bg-brown-700 transition duration-200">
      <img
        src={
          !userData
            ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            : userData.startsWith("https://lh3.googleusercontent.com")
            ? userData
            : `${serverURL}/upload/${userData}`
        }
        alt="user icon"
        className="w-10 h-10 rounded-full object-cover"
      />
      
    </div>
  }
>
  <Link to="/profile">
    <DropdownItem>Profile</DropdownItem>
  </Link>
  <Link to="/login">  <DropdownItem>Sign out</DropdownItem></Link>
 
</Dropdown>


          
  
 </div>
  
  :
  <Link to={'/login'}>
        <Button className='p-5 text-xl !bg-amber-100 text-amber-950'>Login <IoMdLogIn className='text-4xl ms-3'/></Button>

</Link>
}
        <NavbarToggle />
      </div>
      { <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <Link to="/allBooks" className=' !text-amber-100 '>Books</Link>
        <Link to="/careers" className=' !text-amber-100 '>Careers</Link>
        <Link to="/contact" className=' !text-amber-100 '>Contact</Link>
      </NavbarCollapse> }
    </Navbar>  </div>
  )
}

export default Header
