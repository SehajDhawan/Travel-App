import React, { useState } from 'react';
import "./Navbar.css";

import {BiTrip} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'

const Navbar = () => {
  //state to update navbar
  const[nav,setNav]=useState("menu")
  //function to show navbar
  const showNavbar=()=>{
    setNav("menu showNavbar");
  }
  //remove navbar
  const closeNavbar=()=>
  {
    setNav("menu closeNavbar");
  }

  return (
    <div className='navBar'>
      <div className='logo'>
       <BiTrip className='icons'/>
       <span>TRIPII</span>
      </div>

      <div className={nav}>  
        <ul>
          <li className='navlist'>
            Destination
          </li>
          <li className='navlist'>
            About Us
          </li>
          <li className='navlist'>
            Testimonials
          </li>
          <li className='navlist'>
            Gallery
          </li>
        </ul>
        {/* remove nav bar */}
        <AiFillCloseCircle className="icons closeicon" onClick={closeNavbar}/>
      </div>
      <button className='signUpbtn btn'>Sign Up</button>
      {/* toggle navbar */}
      <PiDotsNineBold className="icons menuicon" onClick={showNavbar}/>
    </div>
  )
}

export default Navbar
