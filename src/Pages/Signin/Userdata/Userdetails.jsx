import React from 'react'
import './Userdetails.css'
const Userdetails = () => {
    // const [userdata,setUserdata]=useState([])
    
        fetch("http://localhost:5000/userdetails",{
      method:"POST",
      body:JSON.stringify({token:window.localStorage.getItem("token")}),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
      
    })
    .then(res=>res.json())
    .then(data=> console.log(data))
    
    
    // .then(data=>setUserdata(data))
    
    const logout=()=>{
        window.localStorage.clear();
        window.location.href = "./"
    }
  return (
    <div>
        <h1>Userdetails</h1>
        {/* {userdata.map((items)=>{
            return(
                <div>
                    
                    <h2>Name : {items.username}</h2>
                    <h2>Email : {items.email}</h2>
                    <h2>Company name : {items.companyname}</h2>
                    <h2>ID : {items.employeeid}</h2>
                </div>
            )
        })} */}
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Userdetails