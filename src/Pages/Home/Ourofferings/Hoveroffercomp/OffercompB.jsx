import React from 'react'
import './OffercompB.css'
const OffercompB = (props) => {
  return (props.blogger) ? (
    <div className='offercomp compb'>
         <div className='offercompchild'>
          <h1 className='offercompchilditem'>Digital, Real-Time or Near Real-Time</h1>
          <button className='offercompchilditem offerbtn'>Book a demo</button>
          <button className='closebtn' onClick={()=>props.setBlogger(false)} >X</button>
      </div>
      <div>
        <p>Integrate Gridlines APIs in your mobile and web applications to instantly onboard users, customers, service providers, staff, merchants, etc.</p>
        <ul className='offercompchild1'>
            <li className='offercompchild1item'>Instant ID verification and KYC APIs (Passport, PAN, Aadhaar, Voter ID, Driving Licence)</li>
            <li className='offercompchild1item'>Other onboarding APIs (Instant Bank account verification, Face match, Vehicle RC verification, Credit Check, COVID vaccination verification, GST verification)</li>
            <li className='offercompchild1item'>Simplify user onboarding, validate user details, automate trust establishment decisions such as establishing user identity, complete candidate KYC etc.</li>
            <li className='offercompchild1item'>Across all APIs, Gridlines APIs ensure high accuracy, uptime, redundancy and fault tolerance</li>
        </ul>
        <p>To learn more, or to get a quote, please write to partner@ongrid.in</p>
      </div>
      {props.children}
    </div>
  ) : "" ;
}

export default OffercompB