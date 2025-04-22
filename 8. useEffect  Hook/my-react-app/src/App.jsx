import { useState,useEffect } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dependences list
  
  //useEffect will run 2 times bcoz of <StrictMode> (developer mode)

  //variation:1
  //runs on every render
  // useEffect(() => {
  // alert("I will run on each render");
  // }) 

  //variation:2
  //that runs on only first render
  // useEffect(()=>{
  //   alert("I will run on only 1st render");
  // }, [])

  //variation: 3
  // useEffect(() => {
  // alert("I will run every time when count is updated");
  // },[count])
  
  //variation: 4
  //multiple dependencies
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count,total])

  //variation: 5
  // let's add a cleanup function
  useEffect(() => {
    alert("count is updated")
    return () => {
    alert(`${count} is unmounted from UI`);
    }
  }, [count])
  
  
  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
    setTotal(total+1);
  }
  

  return (
    <div>
    <button onClick={handleClick}>
      update Count 
    </button> 
    <br />
    Count is: {count}
    <br />
    <button onClick={handleClickTotal}>
      update Total 
    </button>
    <br />
    Total is: {total}
    </div>
  )
}

export default App


 // useEffect(() => {
  // document.title = `value of count is: ${count}`;
  // },[count])