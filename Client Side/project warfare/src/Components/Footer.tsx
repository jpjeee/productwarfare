import React from 'react'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import envelope from '../assets/envelope.png'
import linkedin from '../assets/linkedin.png'
const date=new Date();
const Year:number=date.getFullYear();


const Footer:React.FC=()=> {
  return (
    <div className='footer'>
        <div className='footer-content'>
        <span className='locations'>Mumbai | Pune | Lucknow </span><br /> <br />

        <a href='mailto:contactus@productwarfare.com?subject=Website Enquiry' className='link'>contactus@productwarfare.com</a>
        </div>
        <div className='copyright-links'>
        
        <span className='copyright'>@{Year} ProductWARfare</span>
        <button className='btn' onClick={()=>{window.open('https://www.linkedin.com/company/productwarfare/','_blank')}}><img src={linkedin} /></button>
        <button className='btn' onClick={()=>{window.open('mailto:contactus@productwarfare.com?subject=Website Enquiry','_blank')}}><img src={envelope} /></button>
        </div>
    </div>
  )
}

export default Footer