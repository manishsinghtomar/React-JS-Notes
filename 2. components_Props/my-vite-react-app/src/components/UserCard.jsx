import React from 'react'
import './UserCard.css'


function UserCard(props) {
  return (
    <div className='user-container' style={props.style} >
      <p id='user-name'> {props.name}</p>
      <img id='user-img' src={props.image} alt={props.name} ></img>
      <p id='user-desc' >{props.desc}</p>
    </div>
  )
}

export default UserCard

