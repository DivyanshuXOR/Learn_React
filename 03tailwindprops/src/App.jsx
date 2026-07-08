import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind test
     </div>
    <Card username="Divyanshu" />
    <Card username="Soni"/>
    </>
  )
}

export default App
