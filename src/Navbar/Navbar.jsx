import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
const Navbar = () => {

  return (
    <div className='header'>
        <div className='monkey'>
            <div className='d'><NavLink to='/'><img src="https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png" alt="not found" className='logo' /></NavLink></div>
            <button className='d'><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Home</NavLink></button>
            <button className='d' ><Link className='notactive-class' to='#whyongrid' smooth>Why OnGrid</Link></button>
            <button className='d'><Link className='notactive-class' to='#ourofferings' smooth>Our Offerings</Link></button>
            <button className='d'><Link className='notactive-class' to='#bussiness' smooth>Bussiness</Link></button>
            <button className='d'><NavLink to='/faq' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>FAQs</NavLink></button>
        </div>
        <div className='monkey'>
            <button className='d '><NavLink to='/bookademo' id='db' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Book a Demo</NavLink></button>
            <button className='d e'><NavLink to='/signin' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Sign-in</NavLink></button>
            <button className='d e'><NavLink to='/userdetails' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>user details</NavLink></button>
        </div>
    </div>
  )
}

export default Navbar