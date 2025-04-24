import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const previousFunction = useRef(null);

    const expensiveCalculation = useCallback(() => {  // count update k case m hi function recreate hoga wrna freeze rahega bcoz of useCallback hook 
        console.log("Running expensive calculation...");
        let result = 0;
        for (let i = 0; i < 100000000; i++){
            result +=i;
        }
        return result;
    },[count]);

  useEffect(() => {
    if(previousFunction.current) {  
      if(previousFunction.current === expensiveCalculation){
        console.log("Function not re-created");
      }
      else {
        console.log("Function got  re-created");
      }
    }
    else{
      previousFunction.current = expensiveCalculation;
    }
  }, [expensiveCalculation])

  return (
    <div>
      <input 
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type something'
      />
      <p>Expensive Calculation Result: {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default ExpensiveComponent


//input me change karne par expensiveCalculation function re-create nhi hoga bcoz of callback hook