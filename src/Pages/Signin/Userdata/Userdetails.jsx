import React, { useState,useEffect } from 'react'
import './Userdetails.css'
const Userdetails = () => {
    const [userdata,setUserdata]=useState
    useEffect(()=>{
        fetch("https://ongrid-backend-atlas.onrender.com/userdetails",{
      method:"POST",
      body:JSON.stringify({token:window.localStorage.getItem("token")}),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
      
    })
    .then(res=>res.json())
    // .then(data=> console.log(data))
    .then(data=>setUserdata(data.data))
      })
       console.log(userdata)
    
      // const isLoggedIn = window.localStorage.getItem("loggedIn")
    
      const logout=()=>{
        window.location.href = "./"
        window.localStorage.clear()
        alert("logout successfull!" )
    }
  return (
    <div>
        <h1>Name : {userdata.name}</h1>
        <h1>Email : {userdata.email}</h1>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Userdetails