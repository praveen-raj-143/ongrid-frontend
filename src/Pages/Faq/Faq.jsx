import React, { useState } from 'react'
import './Faq.css'
import faqdata from './faqdata'
import faqdatato from './faqdatato'
const Faq = () => {
  const [faqdis,setFaqdis]=useState(false)
  const  data=faqdata;
  // console.log(data)
  const detail=faqdatato;
  console.log(detail)
  return (
    <div className='faqmain'>
      <div className='faqheader'>
        <h1 className='faqheadertext'>Frequently Asked Questions (FAQs)</h1>
      </div>
      <div className='faqinpt'>
      <h2>FAQs by client organizations</h2>
      <ol>
      {data.map((item)=>{
          return(            
              <div >
                  <li onClick={()=>setFaqdis(!faqdis)}>{item.title}</li>
                  {faqdis && <p>{item.discription}</p>}
                <hr />
              </div>            
          )
        })}
        </ol>
      <h2>FAQs by individuals or BGV candidates</h2>
      <ol>
      {detail.map((items)=>{
          return(            
              <div >
                  <li onClick={()=>setFaqdis(!faqdis)}>{items.title}</li>
                  {faqdis && <p>{items.discription}</p>}
                <hr />
              </div>            
          )
        })}
      </ol>
      </div>
    </div>
  )
}

export default Faq