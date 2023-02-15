import React from 'react'
import "./header.scss"
const Header = () => {
  return (
    <header>
        <div className='header_text'>
            <div className='header_text_heading'>Law Firm Lawyers.</div>
            <div className='header_text_subHeading'>We understand your challenges. We strive to be accessible, responsive and affordable. We know the importance of finding a law firm you can trust and that's why your trust is our top priority.</div>
            <div className='header_text_btn'>
                <button>Book a consultation</button>
            </div>
        </div>
    </header>
  )
}

export default Header