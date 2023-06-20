import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import hero from './headimg/hero-image2.jpg'
// import grid from './headimg/grid.png'
const Header = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <div className='headmain'>
        <div className='headimg' >
            <img src={hero} alt="not found" className='gridimg'/>
            {/* <img src={grid} alt="not found" className='gridimg1'/> */}
            <div className='headtext'>
            <h1>DIGITAL TRUST PLATFORM</h1>
            <p className='headtxt1'>Empowering employers and service providers through comprehensive identity and background
verifications for ensuring trust and accountability, and for achieving HR/ISO compliance.</p>
{isLoggedIn ? "" : <Link to='/signin'><button className='btnstar'>GET STARTED</button></Link>}
            </div>
        </div>
        <div className='headfoot'>
            <p className='headfoottxt'>Millions of people are a step away from entering the formal digital economy. They will need access to formal services such as jobs, education, healthcare, loans, insurance products, house/vehicle on rent, etc. This transformation is possible with employers and service providers being able to establish trust through identity and background verifications. OnGrid offers 50+ background checks, and also leverages a repository of verified information in a secure locker, with the consent of an individual, for achieving this.</p>
        </div>
    </div>
  )
}

export default Header