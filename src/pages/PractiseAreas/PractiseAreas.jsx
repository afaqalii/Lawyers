import React from 'react'
import "./PractiseArea.scss"
import Button from '../../components/button/button'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import HoldingSon from "../../assets/holding-son.jpg"
import HoldingPassports from "../../assets/holding-passports.jpg"
import RealEstateBuilding from "../../assets/real-estate-building.jpg"

const PractiseAreas = () => {
  return (
    <>
        <div className="practise_areas_header">
           {/* <Navbar/> */}
           <div className="practise_areas_heading">
            <div className="practise_areas_heading_container container">
               <div className="practise_areas_heading_container-content">
                  <h1>Practice area</h1>
               </div>
            </div>
           </div>
        </div>

        <div className="practise_area">
        <div className="practise_area_container container">
            <div className='practise_area_container-boxes'>
            <div className="practise_area_container-box">
            <div className="practise_area_container-img">
                <figure>
                    <img src={HoldingSon} alt="" />
                </figure>
            </div>
            <div className="practise_area_container-content">
                <h1>Familay Law</h1>
                <p>
                    Separation is an emotionally charged for most people. It can feel overwhelming.
                </p>
                <p>
                    While negotiating your separation agreement, you may well need to deal legal issues such as parenting arrangements, spousal and child support claims. 
                </p>
                <p>
                    Our family lawyers are experts in this field and will ensure they do everything so that you get the very best possible arrangement for your needs.
                </p>
                <div className="btn">
                    <Button content="Book a Consultation" color="white" bg="black"/>
                </div>
            </div>
            </div>
            <div className="practise_area_container-box">
            <div className="practise_area_container-img">
                <figure>
                    <img src={RealEstateBuilding} alt="" />
                </figure>
            </div>
            <div className="practise_area_container-content">
                <h1>Real Estate Law</h1>
                <p>
                Buying a house or apartment? When you negotiate the purchase of a  property, it is important to work with a trusted legal advisor.
                </p>
                <p>
                We have years of experience in real estate agreements of all kinds and provide personalised, specialized attention for every situation. We focus on protecting your best interesting, up to and beyond the closing date.
                </p>
                <div className="btn">
                    <Button content="Book a Consultation" color="white" bg="black"/>
                </div>
                </div>
            </div>

            <div className="practise_area_container-box">
            <div className="practise_area_container-img">
                <figure>
                    <img src={HoldingPassports} alt="" />
                </figure>
            </div>
            <div className="practise_area_container-content">
                <h1>Immigration Law</h1>
                <p>
                    Separation is an emotionally charged for most people. It can feel overwhelming.For all immigration issues, it is essential to have an experienced and knowledgeable immigration lawyer who knows your rights inside and out.
                </p>
                <p>
                At Lawyers., we stay up to date with the latest immigration laws, rules, policies and procedures for processing various immigration applications, as well as current court decisions so we can effectively represent you. 
                </p>
                <p>
                    Our family lawyers are experts in this field and will ensure they do everything so that you get the very best possible arrangement for your needs.
                </p>
                <div className="btn">
                    <Button content="Book a Consultation" color="white" bg="black"/>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default PractiseAreas