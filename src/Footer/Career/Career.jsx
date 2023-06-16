import React from 'react'
import './Career.css'
import {Link} from 'react-router-dom'
const Career = () => {
  return (
    <div>
      <div className='careerimg'>
      <br /><br /> <br />
            <br />
            <br />
        <h1 className='careerimgtext'>Brighten Your Future!</h1>
      </div>
      <div className='careertetxt'>
        <h1>Explore opportunities with us!</h1>
        <p>We are a team of individuals with diverse backgrounds and expertise, all driven with a common purpose of enabling secure and digital transactions in a modern and growing India, with an opportunity to help millions of Indians access services easily, meet their aspirations, and provide upward mobility in society. All playing different yet significant roles, all working fervently towards creating better user experiences, all driven with a thirst for innovation. And in that dynamic, fast-paced community is a cornucopia of opportunities, for you. Pick a team, find your opportunity and get in touch with us.</p>
      </div>
      <div className='careeritem'>
      <h1 className='careeritemhead'>Current Openings</h1>
      <ul type="none">
        <li>Currently, there are no open positions.</li>
        <li>However, please write to OnGrid with your profile if you are interested to be a part of the OnGrid journey.</li>
      </ul>
      <div className='careeritemfoot'>
        <p>Send your CV to <Link className='foottetxtitemlink'>partner@ongrid.in</Link></p>
      </div>
      </div>
    </div>
  )
}

export default Career