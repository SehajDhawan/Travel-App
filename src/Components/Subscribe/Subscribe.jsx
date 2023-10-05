import React,{useEffect} from 'react'
import './Subscribe.css'
import newimage from '../../Assets/inquiry.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='subscribe section container'>
      <div className="seccontainer grid">
        <img src={newimage} alt="" className='caller'  data-aos='fade-down'/>
        <div className="textdiv">
          <h4  data-aos='fade-up'>Best Way to Start YOur Journey!</h4>
          <p  data-aos='fade-up'>We offers personalised itenaries tailored to individual preferencesand interests.</p>
          <button className='btn'  data-aos='fade-up'> Start Here</button>
        </div>
      </div>
      
    </div>
  )
}

export default Subscribe
