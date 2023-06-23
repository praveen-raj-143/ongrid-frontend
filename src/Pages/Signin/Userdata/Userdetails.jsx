import React, { useState } from 'react'

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
      },[])
      // console.log(userdata.username)
    
      const isLoggedIn = window.localStorage.getItem("loggedIn")
    
      const logout=()=>{
        window.location.href = "./"
        window.localStorage.clear()
        alert("logout successfull!" )
    }
  return (
    <div>
        <h1>{userdata.name}</h1>
        <h2></h2>
    </div>
  )
}

export default Userdetails