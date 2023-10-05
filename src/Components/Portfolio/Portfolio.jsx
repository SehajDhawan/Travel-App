import React,{useEffect} from 'react'
import './Portfolio.css'
import icon1 from '../../Assets/safety.png'
import icon2 from '../../Assets/destination.png'
import icon3 from '../../Assets/support.png'
import enjoy from '../../Assets/joy.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='portfolio section container'>
      <div className="seccontainer grid">
        <div className="leftcontent">
          <div className="secheading">
            <h3 data-aos='fade-up'>Why You Should Choose Us</h3>
            <p data-aos='fade-up'>
              We have extensive knowledge and experience in the travel industry
            </p>
          </div>
{/* 1 */}
          <div className="grid">
            <div className="singleportfolio flex" data-aos='fade-up'>
              <div className="icondiv" >
                <img src={icon1} alt="" />
              </div>
              <div className="infor" data-aos='fade-up'>
                <h4 data-aos='fade-up'>Safety and support </h4>
                <p data-aos='fade-up'>Our top priority is the safety and well being of our clients. we maintain high safety standard and have emergency support available during the trip.</p>
              </div>
              </div>

{/* 2 */}
            <div className="singleportfolio flex" data-aos='fade-up'>
              <div className="icondiv" >
                <img src={icon2} alt="" />
              </div>
              <div className="infor" data-aos='fade-up'>
                <h4 data-aos='fade-up'>Diverse Range Of Destination </h4>
                <p data-aos='fade-up'>Whether it's a domestic tour or an international adventure, we covers a wide range o destination to cater the different interests and preferences
                </p>
              </div>
            </div>

{/* 3 */}
            <div className="singleportfolio flex" data-aos='fade-up'>
              <div className="icondiv" >
                <img src={icon3} alt="" />
              </div>
              <div className="infor" data-aos='fade-up'>
                <h4 data-aos='fade-up'>24/7 Customer Support </h4>
                <p data-aos='fade-up'>Our dedicated customer support team is available around the clock to address any queries or concern before, during, and after the trip.
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="rightcontent" data-aos='fade-up'>
          <img src={enjoy} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio
