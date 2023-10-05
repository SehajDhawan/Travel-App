import React, {useEffect}from 'react'
import './Destination.css'
import {FaMapLocationDot} from 'react-icons/fa6';
import {BsFillCreditCard2BackFill} from 'react-icons/bs';
import {SlCalender} from 'react-icons/sl';
import {BiSearchAlt} from 'react-icons/bi';
import {FaLocationDot} from 'react-icons/fa6'

import image1 from "../../Assets/image1.jpg";
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';
import image4 from '../../Assets/image4.jpg';
import image5 from '../../Assets/image5.jpg';
import image6 from '../../Assets/image6.jpg';
import image7 from '../../Assets/image7.jpg';
import image8 from '../../Assets/image8.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'
//create an array that will contain all the destinations
 //and we loop through it 

 const destinations=[
  {
    id:1,
    image:image1,
    name:"Udaipur",
    location:"Jaipur,India",
    rating:"4.5",
  },
  {
    id:2,
    image:image2,
    name:"Varanasi",
    location:"UP,India",
    rating:"4.6",
  },
  {
    id:3,
    image:image3,
    name:"Rishikesh",
    location:"Uttrakhand,India",
    rating:"4.7",
  },
  {
    id:4,
    image:image4,
    name:"Kasol",
    location:"India",
    rating:"4.6",
  },
  {
    id:5,
    image:image5,
    name:"Ladakh",
    location:"India",
    rating:"4.5",
  },
  {
    id:6,
    image:image6,
    name:"Ooty",
    location:"Karnataka,India",
    rating:"4.5",
  },
  {
    id:7,
    image:image7,
    name:"Sikkim",
    location:"India",
    rating:"4.5",
  },
  {
    id:8,
    image:image8,
    name:"Maldives",
    location:"India",
    rating:"4.5",
  },

 ];
const Destination = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    
      <div className="destination section container">
        <div className="seccontainer">

          <div className="sectitle">
            <span id="redtext" data-aos='fade-up'>
              EXPLORE NOW
            </span>
            <h3 data-aos='fade-up'>Find Your Dream Destination</h3>
            <p data-aos='fade-up'>
              Fill in the fields below to find the best spot for your next tour.
            </p>
          </div>
          <div className="searchfield grid"> 
          <div className="inputfield flex" data-aos='fade-up'>
          <FaMapLocationDot className="icon"/>
          <input type="text" placeholder='Location' />
          </div>
          
          <div className='inputfield flex' data-aos='fade-up'>
          <BsFillCreditCard2BackFill className='icon'/>
          <input type="text" placeholder='Budget' />
          </div>

          <div className="inputfield flex" data-aos='fade-up'>
          <SlCalender className="icon" />
          <input type="text" placeholder='Date' />
          </div>

          <button className='btn flex' data-aos='fade-up'>
          <BiSearchAlt className='icon'/>
          Search
          </button>
          </div>
          {/* section menu */}
          <div className="secmenu">
            <ul className='flex' data-aos='fade-up'>
              <li className='active'>All</li>
              <li className='active'>Reccommended</li>
              <li className='active'>Beach</li>
              <li className='active'>Park</li>
              <li className='active'>Nature</li>
              <li className='active'>Mountain</li>
            </ul>
          </div>
{/* places names */}
          <div className="destination grid">
            {destinations.map((destination)=>{
              return(
                <div className="singledestination" key={destination.id} 
                data-aos='fade-up'
                >
                <div className="imgdiv" data-aos='fade-up'>
                  <img src={destination.image} alt="DestinationImage" />
                  {/* here the destinations */}
  
                  <div className="destinfo flex">
                    <div className="text">
                    <span className='name'>{destination.name}</span>
                    <p className='flex'> <FaLocationDot className='icon'/>{destination.location}
                    </p>
                  </div>
                  <span className="rating">{destination.rating}
                  </span>
                  </div>
                  
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
  )
}

export default Destination
