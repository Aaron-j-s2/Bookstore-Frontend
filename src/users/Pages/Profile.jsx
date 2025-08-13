import React from "react";
import Header from '../Components/Header';
import { FaCheckCircle, FaEdit, FaTimes } from "react-icons/fa";
import Footer from "../../Components/Footer";
import { Button, Drawer, DrawerHeader, DrawerItems, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { RiImageAddFill } from 'react-icons/ri'
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { uploadBookAPI } from "../../services/allAPIs";



function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true)
  const [bookshow, setBookshow] = useState(false)
  const [histroyshow, setHistroyshow] = useState(false)
  const [bookDetails,setBookDetails]=useState({
        title:"",author:"",noofpages:"",imageUrl:"",price:"",dprice:"", abstract:"",publisher:"",language:"",isbn:"",category:"",UploadedImages:[]
    })

  //hold image url
  const [preview, setPreview] = useState("")

  //to
  const [previewList, setPreviewList] = useState([])
  const [token, setToken] = useState([])
  console.log(bookDetails);


  function handleClose() {
    return setIsOpen(false);
  }


  const handleupload = (e) => {
   //image value 
        console.log(e.target.files[0]);
        //to hold 3 images
        let imgArray = bookDetails.UploadedImages
        imgArray.push(e.target.files[0])
        console.log(imgArray);
        setBookDetails({...bookDetails,UploadedImages:imgArray})
        //obj to url conversion
        const url = URL.createObjectURL(e.target.files[0])
        console.log(url);
        setPreview(url)
        //create a new array for holding image list
        let imgListArray = previewList
        imgListArray.push(url)
        setPreviewList(imgListArray)
  }

  const handleReset=()=>{
        setBookDetails({
                    title:"",author:"",noofpages:"",imageUrl:"",price:"",dprice:"", abstract:"",publisher:"",language:"",isbn:"",category:"",UploadedImages:[]
        })
        setPreview("")
        setPreviewList([])
    }


  const handleAddBook = async () => {
    const { title,author,noofpages,imageUrl,price,dprice, abstract,publisher,language,isbn,category,UploadedImages} = bookDetails
       
        if(!title || !author || !noofpages || !imageUrl || !price || !dprice || !abstract ||!publisher || !language || !isbn || !category || !UploadedImages){
            toast.warn("Please fill the form!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  })
        }
        else{
            //ADD API
            //create request header , includes token
            const reqHeader = {
                Authorization : `Bearer ${token}`
            }

            const reqBody = new FormData()
            // reqBody.append("title",title)
            for (let key in bookDetails){
               if(key != "UploadedImages"){
                 reqBody.append(key,bookDetails[key])
               }
               else{
                bookDetails.UploadedImages.forEach((item)=>(
                    reqBody.append("UploadedImages",item)
                ))
               } 
            }
            try{
                const result = await uploadBookAPI(reqBody,reqHeader)
                console.log(result);   

                 toast.success("Book Added Successfully", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            // transition: Bounce,
                          })

                          handleReset()
            }
            catch(err){
                console.log(err);
                
            }

        }


  }
  
useEffect(()=>{ 
   setToken(sessionStorage.getItem("token")) 
   },[])
  
   console.log(token);

  return (
    <div>
      <Header />
      <div className='bg-orange-800 h-50 '>
        <div className='ps-15 pt-25'>
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLC0fp7S_pv0XWTFN43yDdOWZZ1TRYumier_JYjAkPEfG64m_c=s432-c-no" className="w-50 h-50 rounded-full border-4 border-white object-cover" alt="" />
        </div>
      </div>

      <div className="flex text-justify justify-between items-start ps-20 pt-28 pe-20  ">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            AARON
            <FaCheckCircle className="text-blue-500" />
          </h1>
          <p className="mt-4 text-lg text-gray-800 max-w-4xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos nam voluptas, architecto totam
            voluptatem qui consequatur explicabo asperiores illum dolorem non sequi ipsam vero! Dolore cum aliquid amet
            recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa ratione a voluptates natus
            magni eius consequuntur velit sint commodi ipsum fuga nulla, dignissimos officiis aut cum quos dolore alias.
          </p>
        </div>
        <button onClick={() => setIsOpen(true)} className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-2 py-2 rounded flex items-center ">
          <FaEdit />
          Edit
        </button>
        <Drawer open={isOpen} onClose={handleClose} className='!bg-amber-50'>
          <DrawerHeader className='!text-black' title="Edit Profile" titleIcon={FaEdit} />

          <DrawerItems>
            <form action="#">
              <div className="flex justify-center mt-6 relative">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLC0fp7S_pv0XWTFN43yDdOWZZ1TRYumier_JYjAkPEfG64m_c=s432-c-no"
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover  shadow-md"
                />
                <div className="absolute bottom-2 right-[calc(50%-80px)] bg-yellow-400 rounded p-2">
                  <FaEdit className="text-white" />
                </div>
              </div>
              <div className="mb-6">
                <Label htmlFor="Usename" className="mb-2 block  !text-amber-900">
                  Username
                </Label>
                <input id="subject" className="w-full border rounded px-4 py-2" name="subject" placeholder="Let us know how we can help you" />
              </div>
              <div className="mb-6">
                <Label htmlFor="Usename" className="mb-2 block  !text-amber-900">
                  New Password
                </Label>
                <input id="subject" className="w-full border rounded px-4 py-2" name="subject" placeholder="Let us know how we can help you" />
              </div>
              <div className="mb-6">
                <Label htmlFor="Usename" className="mb-2 block  !text-amber-900">
                  Confrim Password
                </Label>
                <input id="subject" className="w-full border rounded px-4 py-2" name="subject" placeholder="Let us know how we can help you" />
              </div>
              <div className="mb-6">
                <Label htmlFor="message" className="mb-2 block  !text-amber-900">
                  Your message
                </Label>
                <textarea
                  rows="3"
                  placeholder="Bookstore user"
                  className="w-full border rounded px-4 py-2 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button type="button" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                  Cancel
                </button>
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                  Save
                </button>
              </div>

            </form>
          </DrawerItems>
        </Drawer>
      </div>


      <div className="flex justify-center items-center gap-2 mt-4">
        <p className={show ? 'p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'} onClick={() => {
          setShow(true);
          setBookshow(false);
          setHistroyshow(false);
        }}>Sell Book</p>
        <p className={bookshow ? 'p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'} onClick={() => {
          setShow(false);
          setBookshow(true);
          setHistroyshow(false);
        }} >Book Status</p>
        <p className={histroyshow ? 'p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'} onClick={() => {
          setShow(false);
          setBookshow(false);
          setHistroyshow(true);
        }}>Purchase Histroy</p>
      </div>



      {/* book upload */}


      {show &&
        <div className='bg-gray-200 p-10 my-20 mx-5'>

          <h1 className='text-center text-3xl font-medium'>Book Details</h1>
          <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className='px-3'>
              <div className="mb-3">
                <input type="text" value={bookDetails.title} onChange={(e => setBookDetails({ ...bookDetails, title: e.target.value }))} placeholder='Title' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" value={bookDetails.author} onChange={(e => setBookDetails({ ...bookDetails, author: e.target.value }))} placeholder='Author' className='p-2 bg-white rounded placeholder-gray-300 w-full'
                />
              </div>
              <div className="mb-3">
                <input type="text " value={bookDetails.noofpages} onChange={(e => setBookDetails({ ...bookDetails, noofpages: e.target.value }))} placeholder='No of Pages' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" value={bookDetails.imageUrl} onChange={(e => setBookDetails({ ...bookDetails, imageUrl: e.target.value }))} placeholder='Image url' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" value={bookDetails.price} onChange={(e => setBookDetails({ ...bookDetails, price: e.target.value }))} placeholder='Price' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" onChange={(e => setBookDetails({ ...bookDetails, dprice: e.target.value }))} value={bookDetails.dprice} placeholder='discount price' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>
              <div className="mb-3">
                <textarea value={bookDetails.abstract} onChange={(e => setBookDetails({ ...bookDetails, abstract: e.target.value }))} rows={5} placeholder='Abstract' className='p-2 bg-white rounded placeholder-gray-300 w-full' ></textarea>
              </div>
            </div>
            <div className='px-3'>
              <div className="mb-3">
                <input type="text" value={bookDetails.publisher} onChange={(e => setBookDetails({ ...bookDetails, publisher: e.target.value }))} placeholder='Publisher' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" value={bookDetails.language} onChange={(e => setBookDetails({ ...bookDetails, language: e.target.value }))} placeholder='Language' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" value={bookDetails.isbn} onChange={(e => setBookDetails({ ...bookDetails, isbn: e.target.value }))} placeholder='ISBN' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" value={bookDetails.category} onChange={(e => setBookDetails({ ...bookDetails, category: e.target.value }))} placeholder='Category' className='p-2 bg-white rounded placeholder-gray-300 w-full' />
              </div>

              <div className="mb-3 flex justify-center items-center w-full mt-10">
                <label htmlFor="imagefile">
                  <input id='imagefile' type="file" style={{ display: 'none' }} onChange={(e) => handleupload(e)} />
                  <img src={preview ? preview : "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} alt="no image" style={{ width: '200px', height: '200px' }} />
                </label>

              </div>

              {
                preview &&
                <div className='flex justify-center items-center'>
                  {
                    previewList?.map(item => (
                      <img src={item} alt="no image" style={{ width: '70px', height: '70px' }} className='mx-3' />
                    ))
                  }
                  {

                    previewList?.length < 3 && <label htmlFor="imagefile">
                      <input id='imagefile' type="file" style={{ display: 'none' }} />
                      <RiImageAddFill className='text-2xl text-blue-600' />
                    </label>
                  }

                </div>
              }


            </div>
          </div>
          <div className='flex md:justify-end justify-center mt-8'>
            <button onClick={handleReset} className='bg-amber-600 rounde text-black p-3 rounded hover:bg-white hover:border hover:border-amber-600 hover:text-amber-600'>Reset</button>
            <button onClick={handleAddBook} className='bg-green-600 rounde text-white p-3 rounded hover:bg-white hover:border hover:border-green-600 hover:text-green-600 ms-4'>Submit</button>
          </div>

        </div>}

      {bookshow &&
        <div className='p-10 my-20 shadow rounded'>


          <div className='bg-gray-200 p-5 rounded mt-4'>
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className='px-4'>
                <h1 className='text-2xl'>title</h1>
                <h2>author</h2>
                <h3 className='text-blue-600'>$ dprice</h3>
                <p>abstract</p>
                <div className='flex'>

                  <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="no image" style={{ width: '70px', height: '70px' }} />

                </div>
              </div>
              <div className='px-4 mt-4 md:mt-4'>
                <img src="" alt="no image" className='w-full' style={{ height: '250px' }} />
                <div className='flex justify-end mt-4'>
                  <button className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600'>Delete</button>
                </div>
              </div>
            </div>
          </div>

          {/* or */}

          <div className='flex justify-center items-center flex-col'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="no image" style={{ width: '200px', height: '200px' }} />
            <p className='text-red-600 text-2xl'>No Book Added Yet</p>
          </div>

        </div>}

      {histroyshow &&
        <div className='p-10 my-20 shadow rounded'>


          <div className='bg-gray-200 p-5 rounded mt-4'>
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className='px-4'>
                <h1 className='text-2xl'>title</h1>
                <h2>author</h2>
                <h3 className='text-blue-600'>$ dprice</h3>
                <p>abstract</p>
                <div className='flex'>

                  <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="no image" style={{ width: '70px', height: '70px' }} />

                </div>
              </div>
              <div className='px-4 mt-4 md:mt-4'>
                <img src="imageurl" alt="no image" className='w-full' style={{ height: '250px' }} />
              </div>
            </div>
          </div>
          {/* or */}
          <div className='flex justify-center items-center flex-col'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="no image" style={{ width: '200px', height: '200px' }} />
            <p className='text-red-600 text-2xl'>No Book Purchased Yet</p>
          </div>

        </div>
      }



<ToastContainer />

      <Footer />
    </div>
  )
}

export default Profile
