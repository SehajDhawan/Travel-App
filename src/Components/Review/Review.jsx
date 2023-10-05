import React,{useEffect} from 'react'
import './Review.css'
import {AiFillStar} from 'react-icons/ai'

import client1 from '../../Assets/client1.jpg'
import client2 from '../../Assets/client2.jpg'
import client3 from '../../Assets/client3.jpg'
import client4 from '../../Assets/client4.jpg'
import client5 from '../../Assets/client5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Review = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='review section container'>
      <div className="seccontainer grid">
        <div className="textdiv">
        <span className="redtext" data-aos='fade-up'>
          FROM OUR CLIENT
        </span>
        <h3 data-aos='fade-up'>
          Real Travel History From Our Beloved Clients
        </h3>
        <p data-aos='fade-up'>
          By choosing us their tour agency. Customers can expect an enriching and enjoyable experience,filled with unforgettable memories that will last a lifetime.
        </p>

        <span className="stars flex">
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          
        </span>
        <div className="clientimages flex" data-aos='fade-up'>
          <img src={client1} alt="" data-aos='fade-up'/>
          <img src={client2} alt="" data-aos='fade-up'/>
          <img src={client3} alt="" data-aos='fade-up'/>
          <img src={client4} alt="" data-aos='fade-up'/>
          <img src={client5} alt="" data-aos='fade-up'/>
        </div>
      </div>
      <div className="imgdiv">
          <img src={client5} alt=""  data-aos='fade-up'/>
      </div>
      
    </div>
    </div>
  )
}

export default Review
