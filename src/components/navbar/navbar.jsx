import React, {useState, useEffect} from 'react'
import Button from '../button/button'
import {BsChevronDown,BsChevronUp} from "react-icons/bs"
import {GiHamburgerMenu} from 'react-icons/gi'
import "./navbar.scss"

const Navbar = () => {

  const [fixedNavbar, setfixedNavbar] = useState(false)
  const ConvertingNavbarToFixed = () => {
       window.scrollY >= 100 ? setfixedNavbar(true) : setfixedNavbar(false)
       console.log(fixedNavbar)
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
     <div className="menu_btn">
      <GiHamburgerMenu style={{color: fixedNavbar ? 'black': 'white'}} size={30}/>
     </div>
    
     

    </nav>
  )
}

export default Navbar