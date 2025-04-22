import { useState } from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'
import './App.css'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  return(
    <div>
      <h1> Welcome to reactjs</h1>
    
    <div>
    {isLoggedIn && <LogoutBtn/>}
    </div>
    </div>
  )
  
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  // if(isLoggedIn){
  //   return (
  //   <LogoutBtn/>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App
