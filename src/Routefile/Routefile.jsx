import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signin from '../Pages/Signin/Signin'
import Bookademo from '../Pages/Bookademo/Bookademo'
import Faq from '../Pages/Faq/Faq'
import Home from '../Pages/Home/Home'
import Siginup from '../Pages/Signin/Siginup'
import About from '../Footer/Aboutus/About'
import Career from '../Footer/Career/Career'
import Contactus from '../Footer/Contactus/Contactus'
import Ourblog from '../Footer/Ourblog/Ourblog'
import Privacy from '../Footer/Privacy/Privacy'
import Termsandcondition from '../Footer/Termsandcondition/Termsandcondition'
import Offercomp from '../Pages/Home/Ourofferings/Hoveroffercomp/Offercomp'
import Forgot from '../Pages/Signin/Forgot'
import Userdetails from '../Pages/Signin/Userdata/Userdetails'

const Routefile = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/signin' element={isLoggedIn==="true" ? "" : <Signin/>} />
        <Route path='/bookademo' element={isLoggedIn==="true" ? <Bookademo/> : <Signin/> } />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/signup' element={<Siginup/>} />
        <Route path='/aboutus' element={<About/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/ourblog' element={<Ourblog/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/termsandcondition' element={<Termsandcondition/>} />
        <Route path='/hovercompoffer/:id' element={<Offercomp/>} />
        <Route path='/forgotpassword' element={<Forgot/>} />   
        <Route path='/userdetails'  element={<Userdetails/>}/>    
    </Routes>
  )
}

export default Routefile