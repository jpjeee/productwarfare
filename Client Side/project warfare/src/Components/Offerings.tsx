import React from 'react'
import '../App.css'
import OfferingsCard from './OfferingsCard'
import data from '../data'

interface OfferingData{
    id:number,
    heading:string,
    img:string,
    text:string
}

const OfferingsCardFn=(sentData:OfferingData)=>{
    return <OfferingsCard key={sentData.id} heading={sentData.heading} img={sentData.img} text={sentData.text}/>
  }

const Offerings:React.FC= () =>{
  return (
    <div id='Offerings'>
        <h2 className='headline offering heading'>OUR OFFERINGS</h2>
      <div className='app-off-div'>
      {data.map(OfferingsCardFn)}
      </div>
    </div>
  )
}

export default Offerings