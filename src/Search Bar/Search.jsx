import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sidebar.css'

  const Search=()=>{
 
    let navigate = useNavigate();
  
  return (
    <div >
       <div className=" h-[680px] w-[460px] mt-4 p-2 border-4 bg-white ml-[990px] justify-end text-center  side-bar">
        <div>
        <input type="text" placeholder='Search.....' className='inputs'/>
        <i onClick={()=> navigate(-1)} className="fa-solid fa-xmark justify-end text-end flex text-2xl toggle"></i>
        </div>
        <ul className=' text-left text-xl font-semibold font-sans '>
        <p className="pl-4 text-lg">Mobile menu</p>
          <a href="http://localhost:5173/" className="m-3  hover:text-red-800">
            Shop All
          </a>
          <a href="http://localhost:5173/Pretzels" className="m-3 hover:text-red-800">
          Pretzels
          </a>
          <a href="http://localhost:5173/Waffles" className="m-3 hover:text-red-800">
            Waffles
          </a>
          <a href="http://localhost:5173/Sauce&Toppings" className="m-3 hover:text-red-800">
          Sauces & Toppings
          </a>
           <a href="http://localhost:5173/GiftBoxes" className="m-3 hover:text-red-800">
          Gift Boxes
          </a>
           <a href="http://localhost:5173/GiftBoxes" className="m-3 hover:text-red-800">
        Occasions
          </a> 
          <a href="http://localhost:5173/" className="m-3 hover:text-red-800">
        Find Us In Store
          </a>
           <a href="#" className="m-3 hover:text-red-800">
        Food Service Direct
          </a>
          <a href="#" className="m-3 hover:text-red-800">
        About Us
          </a>
          <a href="#" className="m-3 hover:text-red-800">
        Accounts
          </a>     
</ul>


    </div>
    </div>
  )
}

export default Search
