import React from 'react'
import Navbar from '../../components/navbar/navbar'
// import "../../components/home/home.scss"
import "./AboutUs.scss"
import OurTeam from "../../assets/lawyersTeam.jpg"
import WhyUs from '../../components/whyUs/WhyUs'
import LawyersInNumbers from '../../components/lawyerInNumbers/LawyersInNumbers'
import CompanyCopy from '../../components/companyCopy/CompanyCopy'
import Footer from '../../components/footer/footer'
import "../../components/footer/footer.scss"
const paragraph1 = "Diversity, inclusion and equality, are hugely important to our practice. As one of the city's largest law firms, and with more than 100 lawyers and staff, we want to ensure that we represent the very best interests of each and every client."

const paragraph2 = "Our legal team reflects the diversity of our clients and the many communities and markets where we work. We strive to understand, value and incorporate differences that are woven into our culture. It is a journey we are taking with each new client and with each new team member."

const AboutUs = () => {
  return (
    <div className='landingPage'>
    <div className='about_us_page_header'>
        <Navbar/>
        <div className='about_us'>
            <div className="about_us_container container">
                <div className="about_us_container-content">
                    <h1>About Us</h1>
                    <p>Lawyers is a global law firm with lawyers located in more than 40 countries throughout the Americas, Europe, the Middle East, Africa and Asia Pacific, positioning us to help clients with their legal needs around the world.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="our_team">
            {/* <figure>
                <img src="https://png.pngitem.com/pimgs/s/99-994440_jefferson-city-lawyers-hd-png-download.png" alt="Lawyers Team" />
            </figure> */}
    </div>
    <WhyUs paragraph1={paragraph1}/>
    <LawyersInNumbers/>
    <CompanyCopy/>
    <Footer/>
    </div>
    )
}

export default AboutUs