import React from 'react'
import Button from '../button/button'
import "../home/home.scss"
import { Link } from 'react-router-dom'

const WhyUs = ({paragraph1,paragraph2}) => {
  return (
    <div className="why_us">
    <div className="why_us_container container">
      <div className="why_us_container_content">
        <h1>Why Us</h1>
        <div className="why_us_container_subcontent">
        <p>{paragraph1} </p>          
        <div>
         <p>{paragraph2}</p>
       <Link to="/Lawyers/about-us"> <Button content="More About us" padding="1em 2em" bg="white" color="black"/></Link>
        </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default WhyUs