import React, { useState } from 'react'
import './counter.css'


const Counter = () => {
  const[count, setCount] = useState(0); // count-> variable , setcount -> function  0-> initial value;
  return (
    <div className='counter-container'>
     <p id='para'> You have Clicked {count} times</p>
     <button id='btn'onClick={()=>{setCount(count+1) }}>Click me</button>
    </div>
  )
}

export default Counter


//event handler    click --> onclick, 