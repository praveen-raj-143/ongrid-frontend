import React from 'react'
import './About.css'
import aboutdata from './Aboutdata'
const About = () => {
    const dataabout=aboutdata;
  return (
    <div>
        <div className='aboutimg'>
            <br />
            <br />
            <br /><br /> <br />
            <h1 className='abouttextitem'>About Us!</h1>
        </div>
        <div>
            {dataabout.map(item=>{
                return(
                    <div className='abouttext'>
                        <h2>{item.title}</h2>
                        <p>{item.discription}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default About