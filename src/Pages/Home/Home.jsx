import React from 'react'
import Whyongrid from './Whyongrid/Whyongrid'
import Ourofferings from './Ourofferings/Ourofferings'
import Bussiness from './Bussiness/Bussiness'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import './Home.css'

const Home = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <div>
        <Header/>
        <Whyongrid/>
        <Ourofferings/>
        <Bussiness/>
        <br />
        <br />
        <br />
        <div className='btnstarted'>
        {isLoggedIn ? "" : <Link to='/signin'><button className='btnstar'>GET STARTED</button></Link>}
        </div>
        <br />
        <br />
    </div>
  )
}

export default Home