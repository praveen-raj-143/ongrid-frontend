import React from 'react'
import './OffercompC.css'
import { Link } from 'react-router-dom';
const OffercompC = (props) => {
  return (props.catch) ? (
    <div className='offercomp compc'>
        <div className='offercompchild'>
          <h2 className='offercompchilditem'>eLockr for issuing employment credentials to ex-employees</h2>
          <button className='offercompchilditem offerbtn'><Link className='hoverlinktxt' to='./bookademo'>Book a demo</Link></button>
          <button className='closebtn' onClick={()=>props.setCatch(false)} >X</button>
      </div>
      <div className='compbtext'>
        <p>eLockr is a free platfrom for employers to issue employment credentials to ex-employees and ex-contractors</p>
        <ul className='offercompchild1'>
            <li className='offercompchild1item'>Empower your ex-employees and ex-contractors by issuing digital employment credentials</li>
            <li className='offercompchild1item'>Outsource your ex-employee verification process while earning credits!</li>
            <li className='offercompchild1item'>Gain useful insights into attrition</li>
            <li className='offercompchild1item'>Facilitate instant verification, done digitally</li>
            <li className='offercompchild1item'>Build accountability through 65+ standardized reference tags</li>
        </ul>
        <p>To learn more, visit eLockr</p>
      </div>
      {props.children}
    </div>
  ) : "" ;
}

export default OffercompC