import React , {useEffect} from 'react'
import './Footer.css'
import {BiTrip} from 'react-icons/bi'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaXTwitter} from 'react-icons/fa6'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="footer">
      <div className="seccontainer grid container">
        <div className="logodiv">
          <div className="footerlogo" data-aos='fade-up'>
            <BiTrip className='icon'/>
            <span>TRIPII</span>
          </div>

          <div className="socialmedia flex" data-aos='fade-up'>
          <BiLogoFacebook className="icon"/>
          <FaXTwitter className="icon"/>
          <BiLogoInstagramAlt className="icon"/>
          <AiFillLinkedin className="icon"/>
          <AiFillGithub className="icon"/>

          </div>

          <div className="footerlinks" data-aos='fade-up'>
            <span className='linktitle'>
              Information
            </span>
            <li>
              <a href="#">Home</a>
              </li>
              <li>
              <a href="#">Explore</a>
              </li>
              <li>
              <a href="#">Travel</a>
              </li>
              <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerlinks" data-aos='fade-up'>
            <span className='linktitle'>
              Helpful Links
            </span>
            <li>
              <a href="#">Destination</a>
              </li>
              <li>
              <a href="#">Support</a>
              </li>
              <li>
              <a href="#">Travel & Conditions</a>
              </li>
              <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerlinks" data-aos='fade-up'>
            <span className='linktitle'>Contact Details</span>
            <span className='Phone'>+91-8595XXXXXX</span>
            <br />
            <span className='Email'>tripii@gmail.com</span>

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Footer
