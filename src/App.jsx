import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  
  const [damageScore, setDamageScore] = useState(0)

  return (
    <>
    <Header damageScore={damageScore}/>
    </>
  )
}

export default App
