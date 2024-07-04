import React from 'react'
import team from '../assets/team.png'

const Team:React.FC=()=> {
  return (
    <div>
        <h2 className='headline team-heading heading'>THE TEAM</h2>
        <div className='team-card-collection'>
        <div className='team-card'>
            <h3>STUTI</h3>
            <p>Chief Executive Officer</p>
            <h3>JAY</h3>
            <p>Chief Strategy Officer</p>
            <h3>PRAKASH</h3>
            <p>Advisory Board</p>
        </div>
        <div>
            <img className='team-img' src={team} alt="team image" />
        </div>
        <div className='team-card'>
            <h3>MAHAK</h3>
            <p>Chief Product Officer</p>
            <h3>KARAN</h3>
            <p>Chief Technology Officer</p>
            <h3>ANIMESH</h3>
            <p>Advisory Board</p>
        </div>
        </div>
    </div>
  )
}

export default Team