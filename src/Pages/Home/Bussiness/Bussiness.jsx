import React, { useState } from 'react'
import './Bussiness.css'
import educate from './Bussiness/education.png'
import staff  from './Bussiness/man-162951_1920.jpg'
import transport from './Bussiness/logistics-852936_1920.jpg'
import bank from './Bussiness/banking.png'
import shop from './Bussiness/shoppingcart.jpg'
import manufactur from './Bussiness/excavators-1174428_1920.jpg'
import it from './Bussiness/informationTechnology.png'
import health from './Bussiness/healthcare.png'
import internet from './Bussiness/internetPlatforms.png'
import Hovercomp from './Hover Component/Hovercomp'
const Bussiness = () => {
  const [overd,setOverd]=useState(false)
  return (
    <div id='bussiness'>
        <div className='bustext'>
        <h1> Bussiness</h1>
        <hr className='hrline'/>
        <p className='textbus'>OnGrid provides comprehensive background verification services that can be customized to any requirement for any industry. Every business has a different purpose for verification and compliance, and hence we offer tailor-made solutions for your unique background check needs.</p>
        </div>
        <div className='buscontainer'>
            <div className='busitem' onClick={()=>setOverd(!overd)}>
              <img src={educate} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>Education/EdTech</h1>
              </div>
            </div>
            
            <div className='busitem'>
              <img src={staff} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>Staffing</h1>
              </div>
            </div>
            <div className='busitem'>
              <img src={transport} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>Transportation, Logistics, eCommerce</h1>
              </div>
            </div>
            <div className='busitem'>
              <img src={bank} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>Banking, Financial Services, Insurance and Fin-Tech</h1>
              </div>
            </div>
            <div className='busitem'>
              <img src={shop} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>Retail, Hospitality, F&B</h1>
              </div>
            </div>
            <div className='busitem'>
              <img src={manufactur} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>Manufacturing</h1>
              </div>
            </div>
            <div className='busitem'>
              <img src={it} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>IT/ITes</h1>
              </div>
            </div>
            <div className='busitem'>
              <img src={health} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>Healthcare</h1>
              </div>
            </div>
            <div className='busitem'>
              <img src={internet} alt="not found" className='busitemimg' />
              <div className='busitemtext'>
                <h1 className='busitemtext1'>Internet Platforms</h1>
              </div>
            </div>
            
        </div>
        {overd && <Hovercomp/>}
    </div>
  )
}

export default Bussiness