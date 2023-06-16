import React from 'react'
import './Contactus.css'
import Map from './Map'
const Contactus = () => {
  return (
    <div>
      <div className='contactimg'>
        <br /><br /><br /> <br /> <br />
        <h1 className='contactimgtext'>Contact us</h1>
      </div>
      <div className='contactcontainer'>
        <div className='containeritem contactform'>
          <h2 className='contactformhead'>Bussiness Enquiry? Bugs? Catch up for tea?</h2>
          <input type="text" placeholder='Name*' className='contactinpt'/><br />
          <input type="text" placeholder='Email*' className='contactinptmail'/>
          <input type="number" placeholder='Phone*' className='contactinptmail'/><br />
          <input type="text" placeholder='Please enter your query here...*' className='contactinpt'/><br />
          <div className='contactbtnparent'>
          <button className='contactbtn'>SUBMIT</button>
          </div>
        </div>
        <div className='containeritem contactparent'>
          <div className='contactchild'>
            <h2>Address</h2>
            <p>Handy Online Solutions Private Limited ThinkPlus, 18B, Institutional Area Opposite Eli Lilly and Company Sector 32, Gurugram, Haryana - 122003</p>
            <div className='adresscontainer'>
              <div className='adressitem'>
                <img src="https://ongrid.in/images/businessInquiries.svg" alt="not found" /> <p>080470 94800</p>
              </div>
              <div className='adressitem'>
                <img src="https://ongrid.in/images/businessInquiries.svg" alt="not found" /> <p> Business Inquiries - partner@ongrid.in</p>
              </div>
              <div className='adressitem'>
                <img src="https://ongrid.in/images/platformSupport.svg" alt="not found" /> <p>Platform Support - support@ongrid.in</p>
              </div>
              <div className='adressitem'>
                <img src="https://ongrid.in/images/applyToOngrid.svg" alt="not found" /> <p> Apply to OnGrid - careers@ongrid.in</p>
              </div>
              <div className='adressitem'>
                <img src="https://ongrid.in/images/feedback.svg" alt="not found" /> <p> Feedback - feedback@ongrid.in</p>
              </div>
            </div>
          </div>
          <div className='contactchild mapbox'>
            <Map/>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Contactus