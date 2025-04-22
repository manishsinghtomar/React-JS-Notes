import React, {useContext} from 'react'
import { ThemeContext, UserContext } from '../App'


const ChildC = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const user = useContext(UserContext);

    function toggleTheme(){
        if(theme === 'light')
            setTheme('dark')
        else
        setTheme('light')

    }

  return (
    <div>
       <button onClick={toggleTheme}>
        Change Theme
       </button>
       data: {user.name}
    </div>
  )
}

export default ChildC
