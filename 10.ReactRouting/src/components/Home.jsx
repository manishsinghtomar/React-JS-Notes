import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
   
  const navigate = useNavigate();
   function handleClick(){
        navigate('/about');
   }

  return (
    <div>
    Home Page
    <button onClick={handleClick}>
      Move to ABOUT Page
    </button>
    </div>
  )
}

export default Home