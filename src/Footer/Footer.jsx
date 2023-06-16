import React from 'react'
import './Footer.css'
import fb from './SocialMedia/facebook.png'
import insta from './SocialMedia/instagram.png'
import linkedin from './SocialMedia/linkedin.png'
import twitter from './SocialMedia/twitter.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='foot'>
        <div className='footer'>
        <div className='footerbox'>
            <h3>Connect with us</h3>
            <div className='footimgs'>
            <a href="https://www.facebook.com/OnGridIndia/" ><img src={fb} alt="not found" className='imgitemfoot' /></a>
            <a href="https://twitter.com/On_grid"><img src={twitter} alt="not found" className='imgitemfoot'  /></a>
            <a href="https://www.linkedin.com/company/ongrid.in?trk=top_nav_home"><img src={linkedin} alt="not found" className='imgitemfoot'  /></a>
            <a href="https://www.instagram.com/ongrid_bgv/"><img src={insta} alt="not found" className='imgitemfoot'  /></a>
            </div>
        </div>
        <div className='footerbox'>
            <h3>Company</h3>
            <div className='footlinks'>
            <p><Link to='/aboutus' className='footlinkitem'>About Us</Link></p>
            <p><Link to='/career' className='footlinkitem'>Career</Link></p>
            <p><Link to='/contactus' className='footlinkitem'>Contact us</Link></p>
            <p><Link to='/ourblog' className='footlinkitem'>Our Blog</Link></p>
            <p><Link to='/termsandcondition' className='footlinkitem'>Terms and conditions</Link></p>
            <p><Link to='/privacy' className='footlinkitem'>Privacy Policy</Link></p>
            </div>
        </div>
        </div>
        <hr />
        <p className='footerfooot'>@ 2023 ONGRID - A brand of Handy Online Solutions Private Limited</p>
    </div>
  )
}

export default Footer