import React from 'react'

interface IPROPS{
    heading:string,
    img:string,
    text:string
}

const OfferingsCard:React.FC<IPROPS>=({heading,img,text})=> {
  return (
    <div>
        <div className='upper-parent'>
    <div className='offering-card-main-div'>
        <div className='offering-card'>
            <div className='offering-card-heading'>
            <h3 className='card-heading'>{heading}</h3>
            <img className='offering-card-img' src={img}/>
            </div>
            <p className='offering-card-text'>
                {text}
            </p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default OfferingsCard