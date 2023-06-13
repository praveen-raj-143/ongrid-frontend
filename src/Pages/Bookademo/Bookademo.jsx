import React, { useState } from 'react'
import './Bookademo.css'
const Bookademo = () => {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [phonenumber, setPhonenumber]=useState("")
  const [organisation,setOrganisation]=useState("")
  const [aboutongrid,setAboutongrid]=useState("")
  async function bookademo(){
    let item= {name,email,phonenumber,organisation,aboutongrid}

    let result = await fetch("http://localhost:5000/bookademo",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    result = await result.json()
     alert(result)
  }
  return (
    <div className='demobox'>
      <div className='boxone textbox'>
        <div>
        <h2 className='textitem'>Ensure HR compliance across organisation</h2>
        <ul>
          <li>Clients can send invites to candidates for self registration and creating their record, reducing HR/Ops work significantly.</li>
          <li>Integration of the client user/customer onboarding system or HRMS with OnGrid APIs.</li>
          <li>Pick and choose from 50+ verifications and background checks across staff categories.</li>
          <li>Reduced TAT and cost of background verifications, basic verification in less than 4 hours, including instant checks.</li>
          <li>Employee onboarding, covering digital collection of data, documents, and consent.</li>
          <li>Trusted by 2000+ clients.</li>
        </ul>
        </div>
        <div>
          <h3>Incredible companies working with OnGrid</h3>
          <div className='company'>
            <div ><img src="https://ongrid.in/images/home/logo/unacademy.png" alt="not found" className='companyimages' /></div>
            <div ><img src="https://ongrid.in/images/home/logo/grofers.png" alt="not found" className='companyimages' /></div>
            <div ><img src="https://ongrid.in/images/home/logo/reliance.png" alt="not found" className='companyimages' /></div>
            <div ><img src="https://ongrid.in/images/home/logo/nobroker.png" alt="not found" className='companyimages' /></div>
            <div ><img src="https://ongrid.in/images/home/logo/delhivery.png" alt="not found" className='companyimages' /></div>
            <div ><img src="https://ongrid.in/images/home/logo/ola.png" alt="not found" className='companyimages' /></div>
            
          </div>
        </div>
      </div>
      <div className='boxone formbox'>
        <label htmlFor="">Name*</label> <br />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='frminpt' placeholder='Please provide your name'/>
        <br /> <br />
        <label htmlFor="">Official Email ID*</label> <br />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='frminpt' placeholder='Please provide your official email ID'/>
        <br /> <br />
        <label htmlFor="">Phone number*</label> <br />
        <input type="Number" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} className='frminpt' />
        <br /> <br />
        <label htmlFor="">Organisation name*</label><br /> 
        <input type="text" value={organisation} onChange={(e)=>setOrganisation(e.target.value)} className='frminpt' placeholder='Please provide your organisation name'/>
        <br /> <br />
        <label htmlFor="">How did you learn about OnGrid?*</label><br />
        <select value={aboutongrid} placeholder='Please select' className='frminpt' onChange={(e)=>setAboutongrid(e.target.value)}>
          <option >Please select</option>
          <option  >Google search</option>
          <option  >Media article</option>
          <option  >Linkedin post</option>
          <option >OnGrid Blog</option>
          <option  >Recieved email from OnGrid</option>
          <option >Referred by an existing OnGrid client</option>
          <option  >Referred by a friend</option>
          <option  >I have used OnGrid before</option>
          <option value="">Other</option>
        </select><br /> <br />
        <button className='frmbtn' onClick={bookademo}>Submit</button>
      </div>
    </div>
  )
}

export default Bookademo