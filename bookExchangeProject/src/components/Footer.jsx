import React from 'react'
import "../styles/footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer">
      <div className="quick-links">
        <h1>Quick Links</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Buy Books</a></li>
          <li><a href="#">Sell Books</a></li>
        </ul>
      </div>
      <div className="support">
        <h1>Support</h1>
        <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Help ?</a></li>
        </ul>
      </div>
      <div className="Follow-us">
        <h1>Follow Us</h1>
        <div className="social-icons">
          <a href="#"><FaFacebook className='facebook-icon icon'/></a>
          <a href="#"><FaInstagram className='instagram-icon icon'/></a>
          <a href="#"><FaLinkedin className='linkedin-icon icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
