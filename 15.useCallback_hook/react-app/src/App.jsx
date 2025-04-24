import { useCallback, useState } from 'react'
import ChildComponent from './components/ChildComponent';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // function handleClick(){   // this function will re-create on every re-render and get new reference on each re-render
  //   setCount(count+1);
  // }

  const handleClick = useCallback(() => {   //after wrapping this function with useCallback hook then yeh ab freeze ho gya ab iska reference change nhi hoga and ab childComponent unnecessary re-render se bach jayega
    setCount(count+1);
  }, []);

// const handleClick = useCallback(() => {   // jese hi count hit hoga yeh fir se recreate ho jayega
//     setCount(count+1);                 
//   }, [count]);

  return (
   <div>
       <div>
        Count: {count}
       </div>
       <br />
       <div>
        <button onClick={handleClick}>
          Increment
        </button>
       </div>
       <br /> <br />

      <div>
        <ChildComponent
          buttonName="Click me"
          handleClick={handleClick}
        />
      </div>
      <hr />
  
   </div>
  )
}

export default App




// button par click karne se count state variable ki value change hoti hai usse pura component re-render hota hai jisme <ChildComponent /> bhi aata hai wo bhi re-render ho jata hai 
// <ChildComponent/> ko re-render hone se rokne k liye hum usko wrap kar dete hai React.memo me 




// jb bhi state change hogi component re-render hoga aur function bhi re-create honge har re-render par


// on every re-render, by default functions fir se re-create honge, recreate hone se function ka reference change ho jata hai, <ChildComponent/> reference alag hone se alg treat krega aur <childCompenent/> fir se re-render ho jayega  