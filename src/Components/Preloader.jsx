import React from 'react'
import img from '../assets/ani.gif'

function Preloader() {
  return (
    <div>
    <img src={img} className='w-full h-screen' alt="" />
    </div>
  )
}

export default Preloader
