import React, { useState } from 'react'
import axios from 'axios'

const Form:React.FC= () =>{
  const [inptname,setName]=useState<string>(""); 
  const[email,setEmail]=useState<string>("");
  const[phoneNumber,setPhoneNumber]=useState<string>("");
  const[countryCode,setCountryCode]=useState<string>("+91");
  
  const sendToDb=async(e: React.FormEvent<HTMLFormElement>)=>{
    if(inptname.trim()===""){
      e.preventDefault();
      alert("That Name field cannot be empty.")
    } else{
      await axios.post("http://localhost:3000/data" , {inptname,email,phoneNumber,countryCode})
      .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCountryCode("+91");
    }
  }
  
  

  return (
    <div>
        <h2 className="headline review-head heading">BOOK A REVIEW NOW</h2>
        <div className='parent-form'>
        <form className='review-form' id='review-form' onSubmit={sendToDb}>
            <label>Tell Us Your Name.</label>
            <input form='review-form' type='text' id='name' name='name' value={inptname} onChange={(e)=>{setName(e.target.value)}} required></input>
            <label>Your Email Address.</label>
            <input form='review-form' type='email' id='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
            <label>Your Phone Number.</label>
            <div className='phone-number'>
            <select form='review-form' required name='country-code' value={countryCode} onChange={(e)=>{setCountryCode(e.target.value)}}>
                <option value={"+91"}>+91</option>
                <option value={"+1"}>+1</option>
            </select>
            <input form='review-form' required id='phone-number' name='phone-number' type='tel' value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} pattern="^\+?[0-9\s\-\(\)]{7,15}$"></input>
            </div>
            <button className='submit-button'>submit</button>
        </form>
        </div>
    </div>
  )
}

export default Form