import React from 'react'
import "./News&Updates.scss"
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import CourtHammer from "../../assets/hammer.jpg"
import HoldingBook from "../../assets/holding-book.jpg"
import Signing from "../../assets/siging-paper.jpg"

const NewsAndUpdates = () => {
  return (
    <div>
        <div className="news_header">
            {/* <Navbar/> */}
            <div className="news">
                <div className="news_container container">
                    <div className="news_container-content">
                        <h1>News And Updates</h1>
                    </div>
                    <div className="news_container-blogs">
                    <div className="newsBlog_container-content-card">
                           <figure>
                              <img src={CourtHammer} alt="" />
                           </figure>
                           <h3>No, You Can't Say That In Court</h3>
                           <p>Before you go to court, make sure you know what you can (and cannot) say.</p>
                     </div>
                        <div className="newsBlog_container-content-card">
                        <figure>
                            <img src={HoldingBook} alt="" />
                        </figure>
                        <h3>Finding Your Legal Niche</h3>
                        <p>There are so many good reasons to communicate with site visitors. Tell them</p>
                        </div>
                        <div className="newsBlog_container-content-card">
                        <figure>
                            <img src={Signing} alt="" />
                        </figure>
                        <h3>Your Relationship With the Law</h3>
                        <p>There is no perfect justice, just as there is no absolute in ethics. But there is perfect</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default NewsAndUpdates