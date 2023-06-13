import React from 'react'
import './Footer.css'
import fb from './SocialMedia/facebook.png'
import insta from './SocialMedia/instagram.png'
import linkedin from './SocialMedia/linkedin.png'
import twitter from './SocialMedia/twitter.png'

const Footer = () => {
  return (
    <div className='foot'>
        <div className='footer'>
        <div className='footerbox'>
            <h3>Connect with us</h3>
            <div>
            <img src={fb} alt="not found" />
            <img src={twitter} alt="not found" />
            <img src={linkedin} alt="not found" />
            <img src={insta} alt="not found" />
            </div>
        </div>
        <div className='footerbox'>
            <h3>Company</h3>
            <ul>
                <li>About Us</li>
                <li>Career</li>
                <li>Contact us</li>
                <li>Our Blog</li>
                <li>Terms and conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        </div>
        <hr />
        <p className='footerfooot'>@ 2023 ONGRID - A brand of Handy Online Solutions Private Limited</p>
    </div>
  )
}

export default Footer