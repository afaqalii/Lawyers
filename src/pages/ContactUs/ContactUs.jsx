import React from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import "../../components/footer/footer.scss"
import "../../components/home/home.scss"
import "./ContactUs.scss"
import Button from '../../components/button/button'
import LawyerGirl from "../../assets/lawyer-girl.webp"

const ContactUs = () => {
  return (
    <div>
        <div className="contact_us_header">
        <Navbar/>
        <div className="contact_us">
            <div className="contact_us_container container">
                <div className="contact_us_container-content">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>
        </div>
        <div className="contact_form">
            <div className="contact_form_container container">
                <div className="contact_form_container-img">
                    <figure>
                        <img src={LawyerGirl} alt="" />
                    </figure>
                </div>
                <div className="contact_form_container-form">
                    <div className="form-content">
                        <h1>How Can We Help You?</h1>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="textarea" placeholder='Message' />
                        <div className="form-content-btn">
                        <Button content="Send Message" bg="white" color="black"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs