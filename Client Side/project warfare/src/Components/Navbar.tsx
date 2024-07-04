import React from 'react'
import Mainlogo from '../assets/Mainlogo.png'
import '../App.css'



const Navbar:React.FC= ()=> {

  return (
    <div className='navbar-full' >
        <img src={Mainlogo} className='mainlogo' alt='logo image' onClick={()=>{window.location.assign('/')}}></img>
        <div className='parent-item'>
        <li className='navbar-Item' id='home' onClick={()=>{window.location.assign('/')}}>HOME</li>
        <li className='navbar-Item' onClick={()=>{window.location.replace("/#Offerings")}}>OFFERINGS</li>
        <li className='navbar-Item' onClick={()=>{window.location.assign('https://blog.productwarfare.com/')}}>BLOGS</li>
        </div>
    </div>
  )
}

export default Navbar