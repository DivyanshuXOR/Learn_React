import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter , setCounter] = useState(10)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("clicked" , counter)
  }

  const removeValue = () => {
    if(counter == 0){
      setCounter(counter)
    }
    else{
      counter = counter - 1
      setCounter(counter)
    }
    console.log("clicked" , counter)
  }

  return(
    <>
    <h1>Learn Hooks with setCounter</h1>
    <h2> Counter value: {counter} </h2>

    <button 
    onClick={addValue}> Add value {counter} </button>
    <button
    onClick={removeValue}> Remove value {counter}</button>
    </>
  )

}

export default App
