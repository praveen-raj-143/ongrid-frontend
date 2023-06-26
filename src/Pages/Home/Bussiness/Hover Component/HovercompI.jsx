import React from 'react'
import './Hovercomp.css'

const HovercompI = (props) => {

  return (props.franky) ? (
    <div className='hovercontainer compi'>
            <button onClick={()=>props.setFranky(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>Internet Platforms</h1>
            <p>Modern-day internet platforms have redefined the way businesses are conducted, and customers or users are acquired. While digital distribution definitely helps in onboarding the customers or users faster, it definitely leaves the businesses susceptible to compliance risks, identity frauds, and/or banking frauds. Instant verification and/or KYC of customers or users can help in compliance adherence and risk mitigation, without adding friction to the seamless onboarding.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Customers, users, sellers, and buyers on a marketplace, merchants, service providers, platform partners</p>
                </div>
            </div>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'>
                    <img src="https://ongrid.in/images/home/leverage.png" alt="not found" />
                </div>
                <div className='hoverimgbox1child'>
                    <p><b>Most opted verifications:</b></p>
                    <ul>
                        <li>ID verification (using instant verification APIs)</li>
                        <li>Electronic KYC (using instant APIs)</li>
                        <li>Face-match (between a selfie-taken and face image on ID document)</li>
                        <li>Bank account verification</li>
                        <li>ID document identification using OCR technology</li>
                        <li>Instant credit check</li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default HovercompI