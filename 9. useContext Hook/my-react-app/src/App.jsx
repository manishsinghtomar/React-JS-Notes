import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


//Step1: create Context
const UserContext = createContext();
//step2: wrap all the child inside a provider
//step3: pass value
//step4: consumer k ander jaake consume karo


function App() {
  const [user, setUser] = useState({name:"Manish tomar"});

  return (
    <>
       <UserContext.Provider value={user}>
        <ChildA />
       </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
