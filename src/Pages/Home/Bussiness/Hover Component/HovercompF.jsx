import React from 'react'
import './Hovercomp.css'

const HovercompF = (props) => {

  return (props.choper) ? (
    <div className='hovercontainer compf'>
            <button onClick={()=>props.setChoper(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>Manufacturing</h1>
            <p>In addition to the compliances required to run a manufacturing setup, the sector has always been vulnerable to falling prey to incidents of destructive herd mentality. Therefore, it becomes critical to mitigate the risk through the BGV of the workforce, especially those working in factories, plants, and production lines.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Assembly line workforce (permanent and contractual), shop floor executives, other workers in factories and plants, corporate office employees</p>
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
                        <li>Police verification</li>
                        <li>Prior employment verification</li>
                        <li>Highest education verification (for white-collar workforce)</li>
                        <li>eLockr reference check </li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default HovercompF