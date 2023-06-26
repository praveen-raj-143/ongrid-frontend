import React from 'react'
import './Hovercomp.css'

const HovercompC = (props) => {

  return (props.zoro) ? (
    <div className='hovercontainer compc'>
            <button onClick={()=>props.setZoro(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>Transportation, Logistics, eCommerce</h1>
            <p>With the adoption of high-technology in the supply chain sector, the industry has involuntarily become a massive driver of change, especially in developing economies. With delivery boys and warehouse staff handling high-value inventory, engaging with end customers at their doorsteps, or ferrying passengers, having an accountable workforce is not just desirable, but also necessary.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Drivers, delivery boys, warehouse staff, field executives, supervisors, distribution center workforce, other employees</p>
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
                        <li>Highest education verification (for the white-collar workforce)</li>
                        <li>eLockr reference check (for the field, warehouse, and distribution center staff)</li>
                        <li>Traffic violation check (for staff directly involved in transportation)</li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default HovercompC