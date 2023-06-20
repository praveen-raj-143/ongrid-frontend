import React from 'react'
import Whyongrid from './Whyongrid/Whyongrid'
import Ourofferings from './Ourofferings/Ourofferings'
import Bussiness from './Bussiness/Bussiness'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import './Home.css'
// import Hovercomp from './Bussiness/Hover Component/Hovercomp'
// import Offercomp from './Ourofferings/Hoveroffercomp/Offercomp'
const Home = () => {
  return (
    <div>
        <Header/>
        <Whyongrid/>
        <Ourofferings/>
        {/* <Offercomp/> */}
        <Bussiness/>
        {/* <Hovercomp/> */}
        <br />
        <br />
        <br />
        <div className='btnstarted'>
        <Link to='/signin'><button className='btnstar1'>GET STARTED</button></Link>
        </div>
        <br />
        <br />
    </div>
  )
}

export default Home