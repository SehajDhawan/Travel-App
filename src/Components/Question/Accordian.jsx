import React ,{useEffect} from 'react'
import './Question.css'
import {BsArrowDownCircle} from 'react-icons/bs'
import {BsArrowUpCircle} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Accordian = ({title,desc,active,setActive}) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='accordiancontainer'data-aos='fade-up'>
        <span className={(active===title ? "activetitle" : "") + " title" + " flex"}>
            {title}
            
             <span onClick={() => setActive(active === title ? null : title)}>
                {active===title ? (<BsArrowDownCircle className="icon"/>) : (<BsArrowUpCircle className="icon"/>
                )}
                </span>
            </span>
            
                <p className={(active===title ? "show" : "")+"description"}>
                   {desc}
                </p>
    </div>
  )
}

export default Accordian
