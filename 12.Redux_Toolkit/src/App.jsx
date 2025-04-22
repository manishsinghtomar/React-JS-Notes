import { useState } from 'react';
import { increment, decrement, Reset, incrementByAmount } from './features/counter/counterSlice';
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value); //value fetch kari hai slice se 
  const dispatch = useDispatch(); //dispatch function created to send (dispatch)actions to the redux store
  
  function handleIncrementClick(){
    dispatch(increment());

  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(Reset());
  }
  
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount)); //payload me amount ki value aajaugi
  }

  return (
      <div className="container">
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br />
        <br />
        <button onClick={handleResetClick}> Reset </button>
        <br />
        <br />
        <input type="Number"
         value={amount}
         placeholder='Enter Amount'
         onChange={(e) => setAmount(e.target.value)}
         />
         <br />
        <br />
        <button onClick={handleIncAmountClick}> Inc by Amount </button>
      </div>
  )
}

export default App




//kisi bhi action ko execute karane  k liye usse dispatch karna pdta hai
//useDispatch hook is used to dispatch actions to the store 
//increment and decrement are action creators which are used to create actions
//increment and decrement are imported from counterSlice.js
//useSelector and useDispatch are hooks provided by react-redux
//useSelector is used to read data from the store