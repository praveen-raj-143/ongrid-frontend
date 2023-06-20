import React from 'react'
import './Hovercomp.css'

const Hovercomp = (props) => {

  return (props.hide) ? (
    <div className='hovercontainer'>
            <button onClick={()=>props.setHide(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>Education/EdTech</h1>
            <p>With the rise in demand, organizations in the Education and EdTech sector are on a hiring spree. The primary users of your service or platform are students, and their safety and learning outcomes are of paramount importance. BGV thus ensures the quality of new hires - tutors, administrative staff, or sales staff, thus helping towards a productive and safe learning environment.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Teachers and Tutors, administrative staff, field sales staff, other employees</p>
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
                        <li>Highest education verification</li>
                        <li>eLockr reference check (for field sales staff)</li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default Hovercomp