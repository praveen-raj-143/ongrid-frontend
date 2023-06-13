import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
const Signin = () => {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  async function login(){
    let item= {email,password}

    fetch("http://localhost:5000/login",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    // result = await result.json()
    // console.log(result)
    .then(res=>res.json())
    .then(data=>{
      if(data.status==="ok"){
        alert("login successfully")
      }
    })
  }
  return (
    <div className='b'>
      <div className='signbox'>
      <h1 >Sign-in on OnGrid</h1>
      <p >view, Add, Manage individuals in your community</p>
      </div>
      <div className='box'>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email*' className='inpt' required /><br /><br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password*' className='inpt' required/> <br /><br />
      <button type='submit' onClick={login} className='btn'>SIGN IN</button> <br /> <br />
      <div>
      <p><Link to='/forgotpassword' className='forgot'>Forgot Password</Link></p>
      <p className='forgot'>Don't have account? <Link to='/signup' className='forgot'>SIGNUP here</Link></p>
      </div>
      </div>  
    </div>
  )
}

export default Signin