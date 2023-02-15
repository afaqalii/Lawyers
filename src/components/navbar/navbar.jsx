import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav>
      <div className='nav_logo_items'>
     <div className="nav_logo">
      <h2>Lawyers.</h2>
     </div>
     <div className="nav_items">
      <ul>
        <div>
          <li><a href='#'>Practice areas</a></li> 
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
      <button>Book a consultation</button>
     </div>
    </nav>
  )
}

export default Navbar