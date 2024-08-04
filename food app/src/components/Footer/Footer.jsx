import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/assets'
const Footer = () => {
  return (
    <div>
      <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>If you don't just want to eat food but want to embark on a culinary adventure that tickles your taste buds and ignites your soul, then buckle up for a flavorful journey </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Terms</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+254719071916</li>
                    <li>contact@tomato.fo.od</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright @2024 © Tomato.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
