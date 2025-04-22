import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {

  const navigate = useNavigate();
  
  function handleClick(){
    navigate('/dashboard');
  }

  return (
    <div>
    About Page
    <button onClick={handleClick}>
      Move to Dashboard
    </button>
    </div>
  )
}

export default About