import React from 'react'
import './Hovercomp.css'

const HovercompE = (props) => {

  return (props.nami) ? (
    <div className='hovercontainer compe'>
            <button onClick={()=>props.setNami(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>Retail, Hospitality, F&B</h1>
            <p>As we step into the new decade, the Retail, Hospitality, and F&B sector have not only grown but evolved to justify the 21st-century aspiration and pallette! The beauty of the industry involves an intimate experience delivered to its stakeholders thus living up to the term hospitality. Considering that each member of the workforce represents your brand, hiring and retaining a thorough breed of professionals becomes critical. Therefore, BGV is a common and accepted norm across the industry.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Corporate staff, retail store executives, cashiers, front office executives, room service staff, supervisors and team leads, chefs, kitchen staff, waiters and servers, other employees and contractors</p>
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
                        <li>eLockr reference check (for the blue-collar and grey-collar workforce)</li>
                        <li>Drug test (5/7/9 panel) (for workforce handling food and other edible inventory)</li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default HovercompE