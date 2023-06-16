import React from 'react'
import blogdata from './Blogdata'
import './Ourblog.css'
const Ourblog = () => {
  const datablog=blogdata;
  return (
    <div className='blogmain'>
      <h1 className='blogmainhead'>OnGrid – Blogs on background checks, verifications, and beyond…</h1>
      <p>Digital Trust Platform</p>
      <div className='blogcontainer'>
      {datablog.map((item)=>{
        return(
          <div className='blogcontaineritem' key={item.id}>
            <img src={item.image} alt="not found" className='blogcontainerimg' />
            <h2 className='texthover'>{item.title}</h2>
            <p>{item.discription}</p>
            <p className='texthover'>{item.hashtag}</p>
          </div>
        )
      })}
      <br />
      </div>
      <p className='blogfoottext'>Blog at WordPress.com.</p>
    </div>
  )
}

export default Ourblog