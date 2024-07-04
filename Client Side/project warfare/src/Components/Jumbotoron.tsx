import React from 'react'
import tablet from '../assets/tablet.png'
const Jumbotoron:React.FC= () =>{
  return (
    <div className='parent-jumbotoron'>
        <div className='headline tagline'>
        "Empowering Your Vision,
        <br />
        Crafting Your Success"
        </div>
        <div className='tagline yellow-line'>You Think, We Create.</div> 
        <div className='tagline'>Where Ideas Meet Execution</div>
        <img id='tablet-img' src={tablet} loading='lazy' width={560} sizes="(max-width: 479px) 100vw, (max-width: 767px) 76vw, (max-width: 991px) 68vw, 55vw" alt='tablet image'/>
    </div>
  )
}

export default Jumbotoron