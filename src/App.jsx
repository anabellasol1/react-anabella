import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from '../src/componentes/NavBar'
import { Greeting } from './componentes/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <NavBar />
    <Greeting />

    </>
  )
}

export default App