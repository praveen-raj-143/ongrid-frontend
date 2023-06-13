import React, { useState } from 'react'
import './Ourofferings.css'
import imgone from './offeringsimg/offerings-eLockr.jpg'
import imgtwo from './offeringsimg/offerings-gridlines.jpg'
import imgthree from './offeringsimg/offerings-onGrid.jpg'
import Offercomp from './Hoveroffercomp/Offercomp'
const Ourofferings = () => {
    const [toggle,setToggle]=useState(false)
    const handletoclick=()=>{
        setToggle(true);
      }
  return (
    <div id='ourofferings'>
        <div className='offertxt'>
        <h1>Our Offerings</h1>
        <hr className='hrline'/>
        <p className='txtoffer'>We offer identity and background verifications for various candidates - covering employees and contractors, new users, customers, merchants, loan applicants, etc.</p>
        </div>
        <div className='offerbox' >
            <div className='offerchild' onClick={handletoclick} >
                <img src={imgthree} alt="not found" className='offerchildimg' />
                <div className='offerchildtext'>
                    <p>OnGrid Background verification with choice of 50+ checks</p>
                </div>
            </div>
            
            <div className='offerchild' onClick={handletoclick}>
            <img src={imgtwo} alt="not found" className='offerchildimg' />
            <div className='offerchildtext'>
                    <p>Gridlines APIs for instant ID verification, KYC and onboarding</p>
                </div>
            </div>
            <div className='offerchild' onClick={handletoclick}>
            <img src={imgone} alt="not found" className='offerchildimg' />
            <div className='offerchildtext'>
                    <p>eLockr for issuing employment credentails to ex-employees</p>
                </div>
            </div>
        </div>
        {toggle && <Offercomp/>}
    </div>
  )
}

export default Ourofferings