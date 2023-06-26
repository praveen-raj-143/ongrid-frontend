import React from 'react'
import './Hovercomp.css'

const HovercompH = (props) => {

  return (props.sanji) ? (
    <div className='hovercontainer comph'>
            <button onClick={()=>props.setSanji(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>Healthcare</h1>
            <p>Healthcare industry globally will continue to grow with improving health seeking behavior and growing concerns for personal health among the general population. An impetus to this has been witnessed due to COVID-19, with a higher demand for testing done from the comforts of home. Provided the nature of work in the sector where there is a close engagement of the staff with service seekers, at home or in hospitals and clinics, and staff having access to highly sensitive medical data as well as drugs, BGV is essential to avoid any unforeseen situations.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Doctors, nursing and paramedical staff, laboratory technicians, phlebotomists, front-office staff, other employees.</p>
                </div>
            </div>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'>
                    <img src="https://ongrid.in/images/home/leverage.png" alt="not found" />
                </div>
                <div className='hoverimgbox1child'>
                    <p><b>Most opted verifications:</b></p>
                    <ul>
                        <li>ID verification</li>
                        <li>Address verification</li>
                        <li>Criminal and court record verification</li>
                        <li>Prior employment verification</li>
                        <li>Highest education verification (including medical diploma)</li>
                        <li>eLockr reference check (for nursing staff, phlebotomists, laboratory technicians)</li>
                        <li>Drug test (5/7/9 panel) (for pharmacy and other staff handling drug inventory)</li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default HovercompH