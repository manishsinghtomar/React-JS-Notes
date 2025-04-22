import React, {useState, useEffect} from 'react'

function TimerComponent() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setSeconds(prevSeconds => prevSeconds + 1);
        },1000);

        return() => {
         clearInterval(intervalId); // this function runs when this component is unmounted from UI (comment kar do us <timerComponent/> yeh run ho jayega) 
        }
    },[])
    // it will run only on first render

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
