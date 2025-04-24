import { useState } from 'react'
import ExpensiveComponent from './components/ExpensiveComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ExpensiveComponent />
    </>
  )
}

export default App
