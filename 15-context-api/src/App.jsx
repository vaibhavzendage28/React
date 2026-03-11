import React from 'react'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { ThemeDataContext } from './context/ThemeContext'

const App = () => {

  const {theme, setTheme} = useContext(ThemeDataContext)

  return (
    <div>
      <Navbar />
      <button className='btn' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>
    </div>
  )
}

export default App