import React from 'react'
import './sellingpage.css'
import img from '../../assets/sell.png';
import Navbar from '../../navbar/Navbar'

function SellingHomePage() {
  return (
    <>
    <Navbar/>
    <br/>
    <section id='container'>
      
       <div className='hello'>
        <img src={img} className='img-e' alt='#'/>
        <div className='gellary'>
        <h1>Your Dreams Come True,Publish your Book Now..</h1>
        <button className='publish-btn'>PUBLISH NOW</button> 
        </div>
      </div>
       
    </section>
    </>
  )
}

export default SellingHomePage