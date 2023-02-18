import React, {useState, useEffect} from 'react'
import Button from '../button/button'
import {BsChevronDown,BsChevronUp, BsFacebook} from "react-icons/bs"
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsTwitter, BsLinkedin} from "react-icons/bs"
import {RxCross1} from "react-icons/rx"
import "./navbar.scss"

const Navbar = () => {

  const [fixedNavbar, setfixedNavbar] = useState(false)
  const [ToggleNavbar, setToggleNavbar] = useState(false)

  const ConvertingNavbarToFixed = () => {
       window.scrollY >= 100 ? setfixedNavbar(true) : setfixedNavbar(false)
  }
  const ShowAndHideNavbar = () => {
    setToggleNavbar(prevState => !prevState)
  }
  useEffect(() => {
    window.addEventListener("scroll", ConvertingNavbarToFixed)
    
    return () => {
      window.removeEventListener("scroll", ConvertingNavbarToFixed);
    };  
})
  
  return (
    <nav className={fixedNavbar ? "navbar":""}>
      <div className='nav_logo_items'>
     <div className="nav_logo">
      <h2>Lawyers.</h2>
     </div>
     <div className="nav_items">
      <ul>
        <div className='nav_items_dropDown-NavItem'>
          <li>
            <a href='#'>Practice areas</a>
            <BsChevronDown className='arrowDown'/>
            <BsChevronUp  className='arrowUp'/>
            </li> 
          <span> 
            <span></span> 
            <span></span>
          </span>
          <ul className='nav_items_dropDown' >
            <li><a href='#'>Family Law</a></li>
            <li><a href='#'>RealEstate Law</a></li>
            <li><a href='#'>Immigration Law</a></li>
          </ul>
        </div>
        <li><a href='#'>About</a></li>
        <li><a href='#'>News & Updates</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
     </div>
     </div>
     <div className='nav_btn'>
      <Button content="Book a consultation" color={fixedNavbar ? 'black': 'white'} bg={fixedNavbar ? 'white': 'black'}/>
     </div>

     {/*  
        RESPONSIVE NAVBAR JSX STARTS HERE
     */}

     <div onClick={ShowAndHideNavbar} className="menu_btn">
      <GiHamburgerMenu style={{color: fixedNavbar ? 'black': 'white'}} size={30}/>
     </div>
     <div className="responsive_navbar" style={{ top: ToggleNavbar ? "0%" : "-5000%"}}>
      <div className="responsive_nav_items">
       <div onClick={ShowAndHideNavbar} className='menu_close-btn'>
        <RxCross1 color='black' size={20}/>
       </div>
      <ul>
        <div className='nav_items_dropDown-NavItem'>
          <li>
            <a href='#'>Practice areas</a>
            <BsChevronDown color='black' className='arrowDown'/>
            </li> 
          <ul className='nav_items_dropDown' >
            <li><a href='#'>Family Law</a></li>
            <li><a href='#'>RealEstate Law</a></li>
            <li><a href='#'>Immigration Law</a></li>
          </ul>
        </div>
        <li><a href='#'>About</a></li>
        <li><a href='#'>News & Updates</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
     </div>
      <div className="nav_footer">
        <div className="nav_footer_links">
          <h3>Address</h3>
          <p>10 Street Name, City Name
            Country, Zip Code</p>
        </div>
        <div className="nav_footer_links">
           <h3>Get in Touch</h3>
           <p>555-555-5555</p>
           <p>mymail@mailservice.com</p>
        </div>
        <div className="nav_footer_links">
          <h3>Follow Us</h3>
          <div className="social_links">
               <BsFacebook size={30}/>
               <BsLinkedin size={30}/>
               <BsTwitter size={30}/>
          </div>
        </div>
      </div>
     </div>
     

    </nav>
  )
}

export default Navbar