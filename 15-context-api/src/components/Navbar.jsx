import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

  const {theme} = useContext(ThemeDataContext)

  return (
    <div className={`nav ${theme}`}>
        <h2>App</h2>
        <div>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
    </div>
  )
}

export default Navbar