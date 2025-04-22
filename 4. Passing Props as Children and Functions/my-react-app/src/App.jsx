import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card';

import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
     <Button handleClick={handleClick}
     text="click me " >
     <h1>{count}</h1> 
     </Button>

     <Card name="Manish Tomar">
     <h1>Best WEB DEV course</h1>
     <p>Trying to be consistent in this</p>
     <p>Will complete the course soon</p>
     </Card>

     <Card children="Main ek children hu">
      Hello Jee ,kaise ho saare
     </Card>

    </>
  )
}

export default App
