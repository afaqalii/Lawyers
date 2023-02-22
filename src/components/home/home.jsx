import React from 'react'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import "./home.scss"
import lawyerGirl from "../../assets/lawyer-girl.jpg"
import CompanyLogoe1 from "../../assets/FCBA-logo.png"
import CompanyLogoe2 from "../../assets/ca_fresno_workers-comp-lawyer_2021.png"
import CompanyLogoe3 from "../../assets/state-bar-logo.png"
import CompanyLogoe4 from "../../assets/NOSSCRLogo.png"
import CompanyLogoe5 from "../../assets/california_attorney_association.png"
import CourtHammer from "../../assets/hammer.jpg"
import HoldingBook from "../../assets/holding-book.jpg"
import Signing from "../../assets/siging-paper.jpg"
import Footer from '../footer/footer'
import Button from '../button/button'
import WhyUs from '../whyUs/WhyUs'
import LawyersInNumbers from '../lawyerInNumbers/LawyersInNumbers'
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
    
    <WhyUs/>


    {/* 
        LAWYERS IN NUMBER CONTAINER
    */}
      <LawyersInNumbers/>
     {/* FREE CONSULTATION CONTIANER */}
     
     <div className="free_consultation section">
      <div className="free_consultation_container container">
        <div className="free_consultation_container-contentBox">
           <div className="free_consultation_container-contentBox_content">
            <h1>Free consultation</h1>
            <p>
We know it can be hard to find the right law firm. That's why we offer all new clients a free 1-hour consultation. </p>
<p>We’ll talk about your case and find the right legal team for meeting your needs. </p>
            <Button content="Book a consultation" bg="white" color="black"/>
           </div>
        </div>
      </div>
     </div>
   <div className="companies section">
      <div className="companies_container container">
        <div className="companies_container-logos">
          <figure>
          <img src={CompanyLogoe1} alt="company logo" />
          </figure>
          <figure>
          <img src={CompanyLogoe2} alt="company logo" />
          </figure>
          <figure>
          <img src={CompanyLogoe3} alt="company logo" />
          </figure>
          <figure>
          <img src={CompanyLogoe4} alt="company logo" />
          </figure>
          <figure>
          <img src={CompanyLogoe5} alt="company logo" />
          </figure>
          </div>
      </div>
    </div>
     {/* COMPANY COPY CONTAINER  */}

      <div className="company_copy section">
        <div className="company_copy_container container">
           <div className="company_copy_container-content">
             <h1>“At Libra, we understand the importance of trust and will do what it takes to earn it."</h1>
             <p>Jonathan Chaser</p>
           </div>
        </div>
      </div>
      
      {/*  COMPANY NEWS AND BLOGS CONTAINER */}
      <div className="newsBlog">
        <div className="newsBlog_container container">
          <h1>News & Updates</h1>
          <div className="newsBlog_container-content">
            <div className="newsBlog_container-content-card">
              <figure>
                <img src={CourtHammer} alt="" />
              </figure>
              <h3>No, You Can't Say That In Court</h3>
              <p>Before you go to court, make sure you know what you can (and cannot) say.</p>
            </div>
            <div className="newsBlog_container-content-card">
              <figure>
                <img src={HoldingBook} alt="" />
              </figure>
              <h3>Finding Your Legal Niche</h3>
              <p>There are so many good reasons to communicate with site visitors. Tell them</p>
            </div>
            <div className="newsBlog_container-content-card">
              <figure>
                <img src={Signing} alt="" />
              </figure>
              <h3>Your Relationship With the Law</h3>
              <p>There is no perfect justice, just as there is no absolute in ethics. But there is perfect</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home