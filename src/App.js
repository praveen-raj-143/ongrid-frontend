import React from 'react'
import Routefile from './Routefile/Routefile'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import './App.css'
const App = () => {
  return (
    <div className='appmain'>
      <Navbar/>
      <Routefile/>
      <br/>
      <Footer/>
    </div>
  )
}

export default App