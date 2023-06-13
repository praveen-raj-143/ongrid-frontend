import React, { useState } from 'react'
import './Signin.css'
const Siginup = () => {
    const [username, setUsername]=useState("")
    const [age,setAge]=useState("")
    const [companyname,setCompanyname]=useState("")
    const [employeeid,setEmployeeid]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
  async function signUp(){
    let item= {username,age,companyname,employeeid,email,password}

    await fetch("http://localhost:5000/signup",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  return (
    <div className='b'>
      <div className='signbox'>
      <h1 >Sign-Up onto OnGrid</h1>
      <p >view, Add, Manage individuals in your community</p>
      </div>
      <div className='box'>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username*' className='inpt' required /><br /><br />
      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age*' className='inpt' required /><br /><br />
      <input type="text" value={companyname} onChange={(e)=>setCompanyname(e.target.value)} placeholder='Company Name*' className='inpt' required /><br /><br />
      <input type="text" value={employeeid} onChange={(e)=>setEmployeeid(e.target.value)} placeholder='Employee ID*' className='inpt' required /><br /><br />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email ID*' className='inpt' required /><br /><br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password*' className='inpt' required/> <br /><br />
      <button type='submit' onClick={signUp} className='btn'>SIGN UP</button>
      </div>
    </div>
  )
}

export default Siginup