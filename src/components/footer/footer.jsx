import React from 'react'
// import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';
import {FaFacebookF,FaBalanceScale } from 'react-icons/fa';
import {BsTwitter, BsLinkedin} from "react-icons/bs"
import { Link } from 'react-router-dom';
import "./footer.scss"
import Button from '../button/button';
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
                    <Button content="Get In Touch" bg="white" color="black"/>
                </div>
            </div>
        </div>
        <div className="footer_content_container">
            <div className="footer_content_container-links">
                <div className="footer_content_contianer-links-box">
                    <h4><Link to="/Lawyers">Lawyers.</Link></h4>
                </div>
                <div className="footer_content_contianer-links-box">
                    <h4>Practice Area</h4>
                    <ul>
                        <li><Link to="/Lawyers/practise-areas">Family Law</Link></li>
                        <li><Link to="/Lawyers/practise-areas">RealEstate Law</Link></li>
                        <li><Link to="/Lawyers/practise-areas">Immigration Law</Link></li>
                    </ul>
                </div>
                <div className="footer_content_contianer-links-box menu-links">
                    <h4><Link to="/Lawyers/about-us">About </Link> </h4>
                    <h4><Link to="/Lawyers/news-updates">News & Updates </Link></h4>
                    <h4><Link to="/Lawyers/contact-us">Contact </Link></h4>
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