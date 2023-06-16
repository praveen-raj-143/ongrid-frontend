import React from 'react'
import './Termsandcondition.css'
import termdata from './Termdata'
const Termsandcondition = () => {
  const dataterm=termdata;
  return (
    <div>
      <div className='termimg'>
        <br /><br /><br /><br />
        <h1 className='contactimgtext'>Terms and Conditions</h1>
      </div>
      <div className='termtext'>
        <h2 className='termtexthead'>Terms of Use</h2>
        <ol>
        {dataterm.map((item)=>{
          return(
            <div key={item.id} >
                <li>{item.titile}</li>
                <p>{item.discription}</p>
            </div>
          )
        })}</ol>
      </div>
    </div>
  )
}

export default Termsandcondition