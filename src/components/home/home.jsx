import React from 'react'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import "./home.scss"
import lawyerGirl from "../../assets/lawyer-girl.jpg"
const Home = () => {
  return (
    <div className='landingPage'>
    <div className='home'>
        <Navbar/>
        <Header/>
    </div>
    {/* PRACTICALS AREA CONTIANER */}
    <div className="practical_areas">
      <div className='practical_areas_container container'>
          <div className="practical_areas_heading">
            <h2>Practical areas</h2>
          </div>
          <div className="practical_areas_content">
            <div className="content">
              <p>1.</p>
              <h2>Family Law</h2>
            </div>
            <div className="content">
              <p>2.</p>
              <h2>RealEstate Law</h2>
            </div>
            <div className="content">
              <p>3.</p>
              <h2>Immigration Law</h2>
            </div>
            </div>
        </div>
        </div>
        {/* OUR TOP PRIORITY CONTAINER */}

       <div className="our_priority">
        <div className="our_priority_container container">
          <div className="our_priority_container_img">
            <img src={lawyerGirl} alt="Our female Lawyer" />
          </div>
          <div className="our_priority_container_content">
              <h1>
              “My top priority is to earn your trust and keep it."
              </h1>
              <p>Peter Smith, Founder.</p>
          </div>
        </div>
       </div>


    {/* WHY US CONTIANER */}
      <div className="why_us">
        <div className="why_us_container container">
          <div className="why_us_container_content">
            <h1>Why Us</h1>
            <div className="why_us_container_subcontent">
            <p>Our lawyers are dedicated to ensuring that you get personal attention and top-quality service for all of your legal concerns. We care about you. </p>          
            <button>More About Us</button>
            </div>
          </div>
        </div>
      </div>

    {/*  */}
    <div className="lawyers_in_number">
        <div className="lawyers_in_number_container container">
          <div className="lawyers_in_number_container_content">
            <h1>Lawyers. in Numbers</h1>
            <div className="lawyers_in_number_container_subcontent">
            <p>Our lawyers are dedicated to ensuring that you get personal attention and top-quality service for all of your legal concerns. We care about you. </p>          
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Home