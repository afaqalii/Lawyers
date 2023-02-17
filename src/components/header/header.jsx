import React from 'react'
import Button from '../button/button'
import "./header.scss"
const Header = () => {
  return (
    <header>
        <div className='header_text'>
            <div className='header_text_heading'>Law Firm Lawyers.</div>
            <div className='header_text_subHeading'><p>We understand your challenges. We strive to be accessible, responsive and affordable. We know the importance of finding a law firm you can trust and that's why your trust is our top priority.</p></div>
            <div className='header_text_btn'>
                <Button content="Book a consultation" color="white" bg="black"/>
            </div>
        </div>
    </header>
  )
}

export default Header