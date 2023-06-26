import React from 'react'
import './Offercomp.css'
import { Link } from 'react-router-dom';

const Offercomp = (props) => {
  return (props.trigger) ? (
    <div className='offercomp'>
         <div className='offercompchild'>
          <h1 className='offercompchilditem'>Digital, Real-Time or Near Real-Time</h1>
          <button className='offercompchilditem offerbtn' style={{ marginLeft:"300px"}}><Link className='hoverlinktxt' to='./bookademo'>Book a demo</Link></button>
          <button className='closebtn' onClick={()=>props.setTrigger(false)} >X</button>
      </div>
      <div  >
        <ul className='offercompchild1'>
          <li className='offercompchild1item'>OnGrid background verification serving 2000+ organizations for higher trust and accountability</li>
          <li className='offercompchild1item'>Provision to integrate HRMS or employee / contractor / provider / partner / user onboarding platform with OnGrid APIs</li>
          <li className='offercompchild1item'>Employee / contractor / provider / partner / user background verification with choice of 50+ checks - ID verification, address verification, education check, employment check, reference checks, CV validation, global database checks (world check), credit checks, bank account verification, vehicle registration verification, traffic violation check, police / court record checks, etc.</li>
          <li className='offercompchild1item'>Provision for self-registration by candidate, facilitating digital collection of details, documents and consent, thereby reducing effort of the HR / Operations team.</li>
          <li className='offercompchild1item'>Data and document security ensured through encryption methodologies, role based access, and adherence to regulatory requirements.</li>
          <li className='offercompchild1item'>Basic checks require no document, with bulk verification format and options for large-scale hiring.</li>
          <li className='offercompchild1item'>Prior employment verification</li>
          <li className='offercompchild1item'>Real-time status through reports and dashboards. Interim reports available as and when checks get completed.</li>
        </ul>
      </div> 
      {props.children}
    </div>
  ) : "";
}

export default Offercomp