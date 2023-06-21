import React from 'react'
import './Hovercomp.css'

const HovercompB = (props) => {

  return (props.luffy) ? (
    <div className='hovercontainer compz'>
            <button onClick={()=>props.setLuffy(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>Staffing</h1>
            <p>The staffing industry has been at the forefront of a paradigm shift with respect to the way employees are hired and deployed. With the aspect of long-term full-time employment being actively replaced with freelancing and temporary stints, more and more organizations (clients) rely on staffing companies for their staff needs. At the same time, these organizations are looking for verified people to be deployed at their sites. Staffing companies can not only reduce risk through background verification but also use it as a differentiator to win client contracts.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Blue-collar workers (eg. security guards, delivery boys, warehouse staff), Grey-collar workers (sales executives, field operations executives, tele-callers)</p>
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
                        <li>Police verification (for client site compliance needs)</li>
                        <li>Prior employment verification (as per client need)</li>
                        <li>Highest education verification (as per client need)</li>
                        <li>eLockr reference check</li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default HovercompB