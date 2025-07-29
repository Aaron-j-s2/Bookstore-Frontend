
import { useEffect, useState } from 'react';
import './App.css'
import Home from './users/Pages/Home'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Preloader from './Components/Preloader';
import Auth from './Pages/Auth';
import Contact from './users/Pages/Contact';
import Careers from './users/Pages/Careers';
import AllBooks from './users/Pages/AllBooks';
import Viewbook from './users/Pages/Viewbook';
import Profile from './users/Pages/Profile';
import AdminHome from './admin/Pages/AdminHome';
import AdminBooks from './admin/Pages/AdminBooks';
import AdminCareers from './admin/Pages/AdminCareers';
import AdminSettings from './admin/Pages/AdminSettings';


function App() {
  const[isLoading,setIsLoading]=useState(false)



  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(true)
    },3000)},[]);
 
  

  return (
    <>
    <Routes>

    <Route path='/' element={isLoading? <Home/> : <Preloader/>} />
    <Route path='/Login' element={<Auth/>}/>
     <Route path='/Register' element={<Auth register/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/careers' element={<Careers/>}/>
      <Route path='/allBooks' element={<AllBooks/>}/>
      <Route path='/viewBook/:id' element={<Viewbook/>}/>
      <Route path='/Profile' element={<Profile/>}/>
       <Route path='/admin-home' element={<AdminHome/>}/>
       <Route path='/admin-books' element={<AdminBooks/>}/>
        <Route path='/admin-careers' element={<AdminCareers/>}/>
        <Route path='/admin-settings' element={<AdminSettings/>}/>


    </Routes>
    </>
  )
}

export default App
