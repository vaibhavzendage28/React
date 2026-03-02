import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar />
      <div className="cards">
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
      </div>
    </>
  )
}

export default App
