import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import './Home.css'
import { Button } from 'flowbite-react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Card } from "flowbite-react";
import { getHomeBookAPI } from '../../services/allAPIs'
import { Link } from 'react-router-dom'



function Home() {
  //to hold home books
  const [homeBooks,setHomeBooks]=useState([])

  const getHomeBooks=async()=>{

    try {
      const result =await getHomeBookAPI()
      console.log(result);
      setHomeBooks(result.data)
      
    } catch (err) {
      console.log(err);
      
    }

  }
console.log(homeBooks);

  

  useEffect(() => {
    getHomeBooks();
  }, []);

  return (
    <>
      <Header />

      <section id="banner" className="bg-[url('https://images.pexels.com/photos/7978207/pexels-photo-7978207.jpeg')] bg-cover bg-center bg-fixed h-[620px]"
      >
        <div className='text-center pt-20'>
          <h1 className='text-6xl text-white hover:text-amber-200'>Stories live here—come find yours</h1>
          <p className='text-2xl text-white hover:text-amber-200'>'Your search for the best bookstore ends here'</p>

          <div className='flex justify-center gap-5 '>

            <div>
              <input placeholder="Choose your book..." id="input" className="input  text-xl  " name="text" type="text"></input>

            </div>

            <div>
              <button className="bg-white text-black p-4 rounded-full shadow-md hover:bg-gray-200 transition">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </section>


      <div>

        <div>
          <h1 className='text-4xl text-center m-3'>NEW ARRIVALS</h1>
          <h3 className='text-2xl text-center m-3'>
            Explore Your New Collections
          </h3>

        </div>
        <div className='flex gap-3 m-7 '>


{
  homeBooks.length>0 ? homeBooks.map(item=>(

    <div > 
      
            <Card
              className="flex ms-10 flex-wrap w-70 text-center !bg-amber-800 !border-white">

              <img src={item.imageUrl} alt="" className='ps-4' width={200} />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="text-white text-xl">
                Price:{item.dprice}rs
              </p>
            </Card>
          </div>
    
  )) : 'no books'
}


         



         


          

          




        </div>




      </div>

      <div className='text-center'>
      <Link to="/allBooks" >
      <button
          class="px-3 z-30 py-4 bg-amber-800 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
        >
          Explore More
        </button>

      </Link>  
      </div>


      <div className='bg-orange-300 h-130 mt-9  p-5 text-justify justify-between flex'>

     <div className='w-300 m-10'>
      <h1 className='text-5xl text-bold text-amber-800 '>Featured Authors</h1>
     <p className='text-3xl text-bold text-amber-800 '>Leo Tolstoy</p>

     <p className='text-xl text-bold text-amber-800 my-4 '>
      Leo Tolstoy was a Russian novelist, philosopher, and moral thinker best known for his epic novels War and Peace and Anna Karenina. His writing explores deep themes of love, family, morality, and the search for meaning in life. Tolstoy believed in simplicity, truth, and nonviolence, and his later spiritual writings inspired figures like Mahatma Gandhi. His characters are richly developed, and his stories reflect the complexities of human nature and society. Through his powerful storytelling and timeless wisdom, Tolstoy remains one of the greatest and most influential authors in world literature.
     </p>
     </div>
     
     <div >
      <img src="https://i.pinimg.com/originals/2e/2a/c6/2e2ac68037e109b5a00e0b20f676deb4.jpg" width={400} height={50} alt="" />

     </div>

      </div>
<br />
      <div className= ' border border-amber-800  text-justify mx-auto w-200  p-3'>

        <h1 className='text-2xl text-center p-4 '>TESTIMONALS</h1>
        <img src="https://cdn.pixabay.com/photo/2015/07/19/09/57/man-851319_1280.jpg" width={209} alt="" className="mx-auto" />

        <p className='text-xl p-4'>"I’ve had a fantastic experience with this online bookstore! The collection is vast, from timeless classics to the latest bestsellers, and the website is easy to navigate. I especially love the personalized recommendations — they always seem to know what I want to read next. My orders arrived quickly and in perfect condition, and the customer service was friendly and helpful. It truly feels like a bookstore made by readers, for readers."   - Aaron</p>
        
      </div>









      <Footer />
    </>


  )
}

export default Home
