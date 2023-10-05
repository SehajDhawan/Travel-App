import React, { useState,useEffect } from 'react'
import './Question.css'
import Accordian from './Accordian';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Question = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const[active,setActive]=useState(
    null
    );
  return (
    <div className='question section container'>
      <div className="secheading">
        <h3>Frequent Ask Questions</h3>
      </div>
      <div className="seccontainer grid" >
        {/* import componment from different folder */}
        <div className="accordian grid" >
          <Accordian 
          title="How do I choose right travel destination for me?" 
          desc="Consider your interest,budget,experience and type of environment you enjoy. Research destination which align with your preferences and offer attractions or activities you find appealing." 
          active={active} 
          setActive={setActive}
          />
          <Accordian 
          title="How do I choose right travel destination for me?" 
          desc="Consider your interest,budget,experience and type of environment you enjoy. Research destination which align with your preferences and offer attractions or activities you find appealing." 
          active={active} 
          setActive={setActive}
          />

        <Accordian 
        title="How do I choose right travel destination for me?"
         desc="Consider your interest,budget,experience and type of environment you enjoy. Research destination which align with your preferences and offer attractions or activities you find appealing." 
          active={active} 
          setActive={setActive}
          />

        <Accordian 
        title="How do I choose right travel destination for me?" 
        desc="Consider your interest,budget,experience and type of environment you enjoy. Research destination which align with your preferences and offer attractions or activities you find appealing." 
          active={active} 
          setActive={setActive}
          />
          </div>

          <div className="form">
            <div className="secheading">
              <h4 data-aos='fade-up'>Do you have any specific question?</h4>
              <p data-aos='fade-up'>
                Please fill the form below our dedicated team will be in touch with you as soon as possible.
              </p>
              </div> 
              <div className="formcontent grid" data-aos='fade-up'>
                <input type="email" placeholder='Enter email address'data-aos='fade-up' />
                <textarea name="" id="" cols="10" rows="5" placeholder='Enter Your questions here' data-aos='fade-up'></textarea>
                <button className='btn' data-aos='fade-up'>Submit Inquiry</button>
              </div>
        </div>
      </div>
      
    </div>
  )
}

export default Question
