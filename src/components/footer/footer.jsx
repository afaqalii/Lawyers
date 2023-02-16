import React from 'react'
// import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';
import {FaFacebookF,FaBalanceScale } from 'react-icons/fa';
import {BsTwitter, BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <footer>
        <div className="footer_copy_container container">
            <div className="footer_copy_container-content">
                <FaBalanceScale/>
                <h1>“Justice delayed is justice denied.”</h1>
                <p></p>
                <div className="footer_copy_container-content-btn">
                    <button>Get In Touch</button>
                </div>
            </div>
        </div>
        <div className="footer_content_container">
            <div className="footer_content_container-links">
                <div className="footer-content_contianer-links-box">
                    <h4>Lawyers.</h4>
                </div>
                <div className="footer-content_contianer-links-box">
                    <h4>Practice Area</h4>
                    <ul>
                        <li><a href="#">Family Law</a></li>
                        <li><a href="#">RealEstate Law</a></li>
                        <li><a href="#">Immigration Law</a></li>
                    </ul>
                </div>
                <div className="footer-content_contianer-links-box">
                    <h3>About</h3>
                    <h3>News & Updates</h3>
                    <h3>Contact</h3>
                </div>
                <div className="footer-content_contianer-links-box">
                    <h3>Business Hours</h3>
                    <div className="business_hours">
                        <div className="business_hours-open"></div>
                        <div className="business_hours-closed"></div>
                    </div>
                </div>
            </div>
            <div className="footer_content_container-copyright">
                <div className="footer_content_container-copyright-content">
                    <p>© 2023 All Rights Reserved | Lawyers</p>
                </div>  
                <div className="footer_content_container-copyright-SocialIcons">
                   <FaFacebookF/>
                   <BsTwitter/>
                   <BsLinkedin/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer