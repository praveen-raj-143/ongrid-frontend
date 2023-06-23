import React, { useState,useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import Collapsible from 'react-collapsible'
const Navbar = () => {
  // const [drop,setDrop]=useState(false)
  const [userdata,setUserdata]=useState([])
  useEffect(()=>{
    fetch("https://ongrid-backend-atlas.onrender.com/userdetails",{
  method:"POST",
  body:JSON.stringify({token:window.localStorage.getItem("token")}),
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }
  
})
.then(res=>res.json())
// .then(data=> console.log(data))
.then(data=>setUserdata(data.data))
  },[])
  // console.log(userdata.username)

  const isLoggedIn = window.localStorage.getItem("loggedIn")
  // const dropclick=()=>{
  //   setDrop(true);
  // }
 
  return (
    <div >
        <div className='header'>
        <div className='monkey'>
            <div className='d'><NavLink to='/'><img src="https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png" alt="not found" className='logo' /></NavLink></div>
            <button className='d'><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Home</NavLink></button>
            <button className='d' ><Link className='notactive-class' to='/#whyongrid' smooth>Why OnGrid</Link></button>
            <button className='d'><Link className='notactive-class' to='/#ourofferings' smooth>Our Offerings</Link></button>
            <button className='d'><Link className='notactive-class' to='/#bussiness' smooth>Bussiness</Link></button>
            <button className='d'><NavLink to='/faq' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>FAQs</NavLink></button>
        </div>
        <div className='monkey'>
            <button className='d '><NavLink to='/bookademo' id='db' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Book a Demo</NavLink></button>
            {isLoggedIn ? "" : <button className='d e'><NavLink to='/signin' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Sign-in</NavLink></button>}
            {isLoggedIn ? <button className='d '><NavLink to='/userdetails' className='notactive-class'>Hai {userdata.username}</NavLink></button> : ""}
        </div>
        </div>
        <div className='dropdown'>
        <div>
        <div className=''><NavLink to='/'><img src="https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png" alt="not found" className='logo' /></NavLink></div>
        </div>
        {/* <div className='dropbtn'>
          <button onClick={dropclick} >MENU</button>
        </div> */}
        <div className='menubox'>
        
        <Collapsible trigger="MENU">
        <div className='dropdownmenu'>
           <ul type="none" className='fparent'>
            <li className='f'><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Home</NavLink></li>
            <li className='f'><Link className='notactive-class' to='/#whyongrid' smooth>Why OnGrid</Link></li>
            <li className='f'><Link className='notactive-class' to='/#ourofferings' smooth>Our Offerings</Link></li>
            <li className='f'><Link className='notactive-class' to='/#bussiness' smooth>Bussiness</Link></li>
            <li className='f'><NavLink to='/faq' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>FAQs</NavLink></li>
            <li className='f'><NavLink to='/bookademo' id='db' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Book a Demo</NavLink></li>
            {isLoggedIn ? "" : <li className='f'><NavLink to='/signin' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Sign-in</NavLink></li>}
            
           </ul>
        </div >
        </Collapsible> 
        <div className='loginname'>{isLoggedIn ? <button className='d '><NavLink to='/userdetails' className='notactive-class'>Hai {userdata.username}</NavLink></button> : ""}
            </div>
        </div>
        </div>
        {/* {drop &&  } */}
    </div>
  )
}

export default Navbar