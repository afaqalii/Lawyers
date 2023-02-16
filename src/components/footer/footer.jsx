import React from 'react'
// import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';
import {FaFacebookF,FaBalanceScale } from 'react-icons/fa';
import {BsTwitter, BsLinkedin} from "react-icons/bs"
import "./footer.scss"
const Footer = () => {
  return (
    <footer>
        <div className="footer_section container">
        <div className="footer_copy_container container">
            <div className="footer_copy_container-content">
                <FaBalanceScale size={70}/>
                <h1>“Justice delayed is justice denied.”</h1>
                <p>William E. Gladstone</p>
                <div className="footer_copy_container-content-btn">
                    <button>Get In Touch</button>
                </div>
            </div>
        </div>
        <div className="footer_content_container">
            <div className="footer_content_container-links">
                <div className="footer_content_contianer-links-box">
                    <h4>Lawyers.</h4>
                </div>
                <div className="footer_content_contianer-links-box">
                    <h4>Practice Area</h4>
                    <ul>
                        <li><a href="#">Family Law</a></li>
                        <li><a href="#">RealEstate Law</a></li>
                        <li><a href="#">Immigration Law</a></li>
                    </ul>
                </div>
                <div className="footer_content_contianer-links-box menu-links">
                    <h4><a href="#">About </a> </h4>
                    <h4><a href="#">News & Updates </a></h4>
                    <h4><a href="#">Contact </a></h4>
                </div>
                <div className="footer_content_contianer-links-box">
                    <h4>Business Hours</h4>
                    <div className="business_hours-box">
                        <div className="business_hours">
                            <p>Mon - Fri</p>
                            <p>9:00 am - 5:00 am </p>
                        </div>
                        <div className="business_hours">
                            <p>Sat - Sun</p>
                            <p>Closed </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_content_container-copyright">
                <div className="footer_content_container-copyright-content">
                    <p>© 2023 All Rights Reserved | Lawyers</p>
                </div>  
                <div className="footer_content_container-copyright-SocialIcons">
                   <FaFacebookF size={30}/>
                   <BsTwitter size={30}/>
                   <BsLinkedin size={30}/>
                </div>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer