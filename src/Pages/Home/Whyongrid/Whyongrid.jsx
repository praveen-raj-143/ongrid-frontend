import React from 'react'
// import { forwordRef } from 'react'
import './Whyongrid.css'
import guard from './why/Armed-Vip-Security-Guards.png'
import cleaner from './why/housekeeping.png'
import driver from './why/whyOngridTaxiDriver.jpg'
import constructer from './why/whyOngridConstructor.jpg'
const Whyongrid = () => {
  return (
    <div id='whyongrid'>
        <div className='whytext'>
        <h1>Why OnGrid</h1>
        <hr className='hrline'/>
        <p className='textwhy'>OnGrid is the fastest growing ISO-certified digital platform for background verifications and checks, serving over 2000+ clients, and having run over 100 million checks. OnGrid's advanced methodologies and proprietary algorithms across 50+ checks brings what you are really expecting from your BGV partner - high efficacy and accuracy, lesser TAT, lesser cost, and hassle-free experience for HR/TA or operations managers running the verification process.</p>
        </div>
        <div className='whyongrid'>
            <div className='ongrid ongrid1'>
              <img src="https://ongrid.in/images/home/leverage.png" alt="not found" className='whyimg' />
                <h3>Cutting edge approach</h3>
                <ul >
                    <li>State-of-art portal and APIs</li>
                    <li>Pick and choose checks</li>
                    <li>Digital candidate file created for compliance and audit</li>
                    <li>Multi-modal information exchange options</li>
                    <li>Multi-modal consent options</li>
                </ul>
            </div>
            <div className='ongrid ongrid2'>
              <h3>Comprehensive and Customizable Verification Solutions</h3>
              <ul>
                <li>ID and address verification</li>
                <li>Education and Employment verification</li>
                <li>Reference Checks</li>
                <li>Police and Court record verification</li>
                <li>Global database checks, credits checks</li>
                <li>CV validation, eLockr reference checks</li>
                <li>Another 40+ checks to choose from</li>
              </ul>
            </div>
            <div className='ongrid ongrid3'><img src={constructer} alt="not found" className='ongrid3' /></div>
            <div className='ongrid ongrid4'><img src={guard} alt="not found" className='ongrid4' /></div>
            <div className='ongrid ongrid5'><img src={driver} alt="not found" className='ongrid5'/></div>
            <div className='ongrid ongrid6'>
              <img src="https://ongrid.in/images/home/crowdSourced.png" alt="not found" className='whyimg'/>
              <h3>Asset-reuse</h3>
              <ul><li>
              Allows candidate to provide electronic consent to an employer or service provider to access her/his information, documents, verification reports, and references</li></ul>
            </div>
            <div className='ongrid ongrid4'>
              <img src="https://ongrid.in/images/home/integrate.png" alt="not found" className='whyimg' />
              <h3>Partner of choice, fastest to reach</h3>
              <ul>
                <li>10 million+ people verified</li>
                <li>100 million+ checks conducted</li>
                <li>2000+ happy clients</li>
                <li>50+ configurable offerings</li>
              </ul>
            </div>
            <div className='ongrid ongrid7'>
              <img src="https://ongrid.in/images/home/access.png" alt="not found" className='whyimg' />
              <h3>Access, Wherever, However</h3>
              <ul>
                <li>Unlimited organization users</li>
                <li>Intuitive portal access for real time verification updates</li>
                <li>Configure reports - who gets them, which reports, how frequently</li>
                <li>APIs for integrating with onboarding systems and HRMS 12X6 email and call support</li>
              </ul>
            </div>
            <div className='ongrid ongrid8'><img src={cleaner} alt="not found" className='ongrid8'/></div>
            
        </div>
    </div>
  )
}

export default Whyongrid