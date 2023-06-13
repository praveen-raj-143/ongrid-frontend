import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signin from '../Pages/Signin/Signin'
import Bookademo from '../Pages/Bookademo/Bookademo'
import Faq from '../Pages/Faq/Faq'
import Home from '../Pages/Home/Home'
import Siginup from '../Pages/Signin/Siginup'
const Routefile = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/bookademo' element={<Bookademo/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/signup' element={<Siginup/>} />
    </Routes>
  )
}

export default Routefile