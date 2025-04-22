import './App.css'
import UserCard from './components/UserCard'
import Manish from './assets/Manish.jpg'
import Varunprofile from './assets/Varun.jpg'
import Picofme from './assets/picofme.jpg'

function App() {
  
  return (
    <>
      <div className='container'>
      <UserCard name="manish tomar" desc="desc1" image={Manish} style={{"border-radius":"50px"}}/>
      <UserCard name="varun tomar" desc="desc2" image={Varunprofile}/>
      <UserCard name="himanshi sharma" desc="desc3" image={Picofme}/>
      </div>
    </>
  )
}

export default App
