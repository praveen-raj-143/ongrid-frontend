import React from 'react'
import './Hovercomp.css'

const HovercompG = (props) => {

  return (props.robbin) ? (
    <div className='hovercontainer compg'>
            <button onClick={()=>props.setRobbin(false)}  className='exitbtn'>X</button>
        <div className='hovertextbox'>
            <h1>IT/ITes</h1>
            <p>The IT/ITes sector and exports have propelled the growth of services sector in many geographies, making them the preferred offshore development destination. The IT industry hires millions of new employees/contractors every year. This sector needs to be well prepared to adhere to the Governance, Risk, and Compliance requirements that new age international engagements demand. To safeguard the interests of clients, accountability of its employees is of the highest importance, and BGV has become a standard across the industry.</p>
        </div>
        
        <div className='hoverimgbox'>
            <div className='hoverimgbox1'>
                <div className='hoverimgbox1child'><img src="https://ongrid.in/images/home/leverage.png" alt="not found" /></div>
                <div className='hoverimgbox1child'>
                    <p><b>Who to verify:</b></p>
                    <p>Software development engineers, QA engineers, database and network administrators, client support staff, project managers, other employees.</p>
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
                        <li>Professional reference check</li>
                        <li>Global database check (for senior executives)</li>
                        <li>Credit history check</li>
                        <li>Drug test (5/7/9 panel) (as per client need)</li>
                    </ul>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  ) : "" ;
}

export default HovercompG