import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Destination from './Components/Destination/Destination'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Portfolio from './Components/Portfolio/Portfolio'
import Questions from './Components/Question/Question'
import Review from './Components/Review/Review'
import Subscribe from './Components/Subscribe/Subscribe'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destination/>
      <Portfolio/>
      <Review/>
      <Questions/>
      <Subscribe/>
      <Footer/> 
      {/* 
      
      */}
    </div>
  )
}

export default App
