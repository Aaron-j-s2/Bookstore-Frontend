import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";  
import Header from '../Components/Header';
import { getAllBookAPI } from '../../services/allAPIs';


function AllBooks() {

   const [allBooks,setAllBooks]=useState([])
  
    const getAllBooks=async()=>{
  
      try {
        const result =await getAllBookAPI();
        console.log(result);
        setAllBooks(result.data)
        
      } catch (err) {
        console.log(err);
        
      }
  
    }
  console.log(allBooks);
  console.log(allBooks.imageUrl);
  
    
  
    useEffect(() => {
      getAllBooks();
    }, []);

  return (

    <div>
       <Header/>

      <div className="min-h-screen bg-white p-10">
    
  {/* Title */}
  <h1 className="text-5xl font-serif text-amber-900 text-center mb-10">Collections</h1>

  {/* Centered Search Bar */}
  <div className="flex justify-center mb-10">
    <div className="flex w-full max-w-md border border-gray-300">
      <input
        type="text"
        placeholder="Search By Title"
        className="w-full p-2 focus:outline-none"
      />
      <button className="bg-amber-900 text-white px-4">search</button>
    </div>
  </div>

  {/* Main Content: Filters on Left */}
  <div className="flex flex-col md:flex-row ">
    {/* Filters Left */}
    <div className="w-70 ">
      <h2 className="text-3xl text-amber-900 font-semibold mb-4">Filters</h2>
      <form className="space-y-3">
        <div className="flex items-center space-x-2 text-xl">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">Literary Fiction</label>
        </div>
        <div className="flex items-center space-x-2 text-xl">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">Philosophy</label>
        </div>
        <div className="flex items-center space-x-2 text-xl">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">Thriller</label>
        </div>
        <div className="flex items-center space-x-2 text-xl">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">Romance</label>
        </div>
        <div className="flex items-center space-x-2  ">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">Horror</label>
        </div>
        <div className="flex items-center space-x-2 text-xl">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">Auto/Biography</label>
        </div>
        <div className="flex items-center space-x-2 text-xl">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">Self-Help</label>
        </div>
        <div className="flex items-center space-x-2 text-xl">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">Politics</label>
        </div>
        <div className="flex items-center space-x-2 text-xl">
          <input type="radio" name="filter" className="accent-black" />
          <label className="">No-filter</label>
        </div>
      </form>
    </div>

    {/* Right content (optional) */}
    <div className="w-full ">
      <div className=' gap-6 grid grid-cols-3 gap-4 '>
                
      
      
      
                {
                  allBooks.length > 0 ?  allBooks.map(item=>(
                    <div >
                  <Card
                    className="flex flex-wrap w-70 text-center !bg-orange-300 !border-white">
      
                    <img src={item.imageUrl} alt="" className='ps-4' width={200} />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                    <p className="text-white text-xl">
                      Price:{item.dprice}rs
                    </p>
                  </Card>
                </div> 

                  ))
                   :    'no books'           
                  }
      
      
      
      
      
              </div>
    </div>
  </div>
</div>



    </div>
   
   
  )
}

export default AllBooks
