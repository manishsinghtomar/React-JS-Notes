import { useEffect, useState,useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // let val= 1; // it will not persist its value, it always give you 2 everytime
  let val = useRef(0); //object, 0 current field k ander hoga

  let btnRef = useRef();  //create reference for button


  function handleIncrement() {
    // val = val+1
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count+1);
  }
 
  // it runs on every render
  useEffect(() => {
    console.log("main ferse render hogya hu")
  })

  function changeColor(){
      btnRef.current.style.backgroundColor = 'lightcoral';
  }

  return (
    <div>
      <button 
      ref={btnRef}
      onClick={handleIncrement}>
        Increment
      </button>
      <br /><br />
    
    <button onClick={changeColor}>
       Change Color of 1st Button
    </button>
      
      <br />

      <div>
        Count: {count}
      </div>
    </div>
  )
}

export default App
