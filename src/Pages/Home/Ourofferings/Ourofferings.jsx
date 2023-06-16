import React, { useState } from 'react'
import './Ourofferings.css'
import Offercomp from './Hoveroffercomp/Offercomp'
import OffercompB from './Hoveroffercomp/OffercompB'
import OffercompC from './Hoveroffercomp/OffercompC'
const Ourofferings = () => {
    const [toggle,setToggle]=useState(false)
    const [blog,setBlog]=useState(false)
    const [visit,setVisit]=useState(false)
  return (
    <div id='ourofferings' className='ourofferingmain'>
        <div className='offertxt'>
        <h1>Our Offerings</h1>
        <hr className='hrline'/>
        <p className='txtoffer'>We offer identity and background verifications for various candidates - covering employees and contractors, new users, customers, merchants, loan applicants, etc.</p>
        </div>
        
         <div className='offerbox'>
                <div  className='offerchild' >
                    <img src="https://ongrid.in/images/home/offerings-onGrid.jpg" alt="not found" onClick={()=>setToggle(true)} className='offerchildimg'  />
                    <div className='offerchildtext'>
                        <p>OnGrid Background verification with choice of 50+ checks</p>
                    </div>
                </div>
                <div  className='offerchild' >
                    <img src="https://ongrid.in/images/home/offerings-gridlines.jpg" alt="not found" onClick={()=>setBlog(true)} className='offerchildimg'  />
                    <div className='offerchildtext'>
                        <p>Gridlines APIs for instant ID verification, KYC and onboarding</p>
                    </div>
                </div>
                <div  className='offerchild' >
                    <img src="https://ongrid.in/images/home/offerings-eLockr.jpg" alt="not found" onClick={()=>setVisit(true)} className='offerchildimg'  />
                    <div className='offerchildtext'>
                        <p>eLockr for issuing employment credentails to ex-employees</p>
                    </div>
                </div>
        </div> 
        <Offercomp trigger={toggle} setTrigger={setToggle}/>
        <OffercompB blogger={blog} setBlogger={setBlog}/>
        <OffercompC catch={visit} setCatch={setVisit}/>
    </div>
  )
} 

export default Ourofferings