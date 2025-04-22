import React, { useState, useEffect } from 'react';

function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    console.log('Count Changed:', count);
  }, [count]);
   //side-effect logic will run only when everytime count is changed 

  useEffect(() => {
    const intervalid = setInterval(() => {
        console.log("SetInterval Started")
        setSeconds(prevSeconds => prevSeconds + 1);  //yeh code bar bar chalega jb tk yeh component unmount nhi hota UI se
    }, 1000);

    return() => {
       console.log("Time to Stop");
       clearInterval(intervalid);
    }

  }, []);
   //it will run only on first render 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick= {() => setCount(count + 1)}> Increment Count</button>
      <h2>Second: {seconds}</h2>
    </div>
  );
}

export default MultiEffectComponent
