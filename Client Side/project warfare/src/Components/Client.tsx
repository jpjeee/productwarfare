import React from 'react'
import clients from '../assets/clients.png'
import ClientCard from './ClientCard'
import '../Clientdata'
import ClientData from '../Clientdata'

interface ClientData{
  id:number,
    name:string,
    company:string,
    review:string
}

const ClientCardFn=(clientdata:ClientData)=>{
    return <ClientCard key={clientdata.id} name={clientdata.name} company={clientdata.company} review={clientdata.review} />
}

const Client:React.FC=()=> {
  return (
    <div className='clients-div'>
        <h2 className='headline clients-header heading'>OUR CLIENTS</h2>
        <img src={clients} className='clients-img'/>
        <div className='client-card-collection'>
        {ClientData.map(ClientCardFn)}
        </div>
    </div>
  )
}

export default Client