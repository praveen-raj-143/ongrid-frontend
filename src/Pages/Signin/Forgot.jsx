import React from 'react'
import './Signin.css'
const Forgot = () => {
  return (
    <div>
        <div className='signbox'>
      <h1 >Sign-in on OnGrid</h1>
      <p >view, Add, Manage individuals in your community</p>
      </div>
      <div className='box'>
      <input type="text"   placeholder='Email*' className='inpt' required /><br /><br />
      <button type='submit' className='btn'>SUBMIT</button> <br /> <br />
      </div>
    </div>
  )
}

export default Forgot