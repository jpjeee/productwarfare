import React from 'react'

interface IPROPS{
    name:string,
    company:string,
    review:string
}

const ClientCard:React.FC<IPROPS>=({name,company,review})=> {
  return (
    <div className='client-card'>
        <h3 className='client-name'>{name}</h3>
        <h4 className='client-company'>{company}</h4>
        <p  className='client-review' >{review}</p>
    </div>
  )
}

export default ClientCard