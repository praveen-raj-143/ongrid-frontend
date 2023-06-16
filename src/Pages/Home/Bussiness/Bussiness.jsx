import React, { useState } from 'react'
import './Bussiness.css'
import Hovercomp from './Hover Component/Hovercomp'
import HovercompB from './Hover Component/HovercompB'
import HovercompC from './Hover Component/HovercompC'
import HovercompD from './Hover Component/HovercompD'
import HovercompE from './Hover Component/HovercompE'
import HovercompF from './Hover Component/HovercompF'
import HovercompG from './Hover Component/HovercompG'
import HovercompH from './Hover Component/HovercompH'
import HovercompI from './Hover Component/HovercompI'
const Bussiness = () => {
  const [cap,setCap]=useState(false)
  const [wild,setWlid]=useState(false)
  const [dog,setDog]=useState(false)
  const [cat,setCat]=useState(false)
  const [pig,setPig]=useState(false)
  const [snake,setSnake]=useState(false)
  const [lion,setLion]=useState(false)
  const [raino,setRaino]=useState(false)
  const [sheep,setSheep]=useState(false)
  return (
    <div id='bussiness'>
        <div className='bustext'>
        <h1> Bussiness</h1>
        <hr className='hrline'/>
        <p className='textbus'>OnGrid provides comprehensive background verification services that can be customized to any requirement for any industry. Every business has a different purpose for verification and compliance, and hence we offer tailor-made solutions for your unique background check needs.</p>
        </div>
        <div className='buscontainer'>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/education.png" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setCap(true)} className='busitemtextchild'>Education/EdTech</h2>
                  </div>
                </div>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/man-162951_1920.jpg" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setWlid(true)} className='busitemtextchild'>Staffing</h2>
                  </div>
                </div>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/logistics-852936_1920.jpg" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setDog(true)} className='busitemtextchild'>Transportation, Logistics, eCommerce</h2>
                  </div>
                </div>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/banking.png" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setCat(true)} className='busitemtextchild'>Banking, Financial Services, Insurance and Fin-Tech</h2>
                  </div>
                </div>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/shopping-1165437_1920.jpg" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setPig(true)} className='busitemtextchild'>Retail, Hospitality, F&B</h2>
                  </div>
                </div>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/excavators-1174428_1920.jpg" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setSnake(true)} className='busitemtextchild'>Manufacturing</h2>
                  </div>
                </div>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/informationTechnology.png" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setLion(true)} className='busitemtextchild'>IT/ITes</h2>
                  </div>
                </div>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/healthcare.png" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setRaino(true)} className='busitemtextchild'>Healthcare</h2>
                  </div>
                </div>
                <div className='busitem' >
                  <img src="https://ongrid.in/images/home/internetPlatforms.png" alt="not found" className='busitemimg' />
                  <div className='busitemtext'>
                    <h2 onClick={()=>setSheep(true)} className='busitemtextchild'>Internet Platforms</h2>
                  </div>
                </div>
        </div>
        <Hovercomp hide={cap} setHide={setCap}/>
        <HovercompB luffy={wild} setLuffy={setWlid}/>
        <HovercompC zoro={dog} setZoro={setDog}/>
        <HovercompD usop={cat} setUsop={setCat}/>
        <HovercompE nami={pig} setNami={setPig}/>
        <HovercompF choper={snake} setChoper={setSnake}/>
        <HovercompG robbin={lion} setRobbin={setLion}/>
        <HovercompH sanji={raino} setSanji={setRaino}/>
        <HovercompI franky={sheep} setFranky={setSheep}/>
    </div>
  )
}

export default Bussiness