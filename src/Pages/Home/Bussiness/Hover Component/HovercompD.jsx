import React from 'react'
import './Hovercomp.css'

const HovercompD = (props) => {

  return (props.usop) ? (
    <div className='hovercontainer compd'>
            <button onClick={()=>props.setUsop(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>Banking, Financial Services, Insurance and Fin-Tech</h1>
            <p>Banking, Financial Services, and Insurance sector has gone through a decade of exponential growth with rapid innovation in technology (the rise of fintech) and rise in per capita income of the consumers. This period of unprecedented growth has been accompanied with ever increasing compliance and regulatory burden, especially given the employee access to highly sensitive financial data. This brings in its own source of challenges where the accountability of workforce is of supreme importance especially.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Engineering and technical staff, branch staff, cashiers, field executives, sales advisors, supervisors, other employees</p>
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
                        <li>Professional reference check (for white-collar workforce)</li>
                        <li>eLockr reference check (for field executives and sales advisors)</li>
                        <li>Credit history check (for senior executives)</li>
                        <li>Global database check (for senior executives)</li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default HovercompD