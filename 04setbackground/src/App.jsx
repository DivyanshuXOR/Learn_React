import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState("Black")
  return (
    <div className='w-full h-screen duration-100' 
    style={{backgroundColor: colour}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColour("red")}
           className='text-white rounded-full px-4 py-1 shadow-2xl'
          style={{backgroundColor:'red'}}>RED</button>
          <button onClick={() => setColour("blue")}
           className='text-white rounded-full px-4 py-1 shadow-2xl'
          style={{backgroundColor:'blue'}}> BLUE</button>
          <button onClick={() => setColour("green")}
          className='text-white rounded-full px-4 py-1 shadow-2xl'
          style={{backgroundColor:'green'}}>GREEN</button>
          <button onClick={() => setColour("pink")}
          className='text-white rounded-full px-4 py-1 shadow-2xl'
          style={{backgroundColor:'pink'}}>PINK</button>
          <button onClick={() => setColour("yellow")}
          className='text-white rounded-full px-4 py-1 shadow-2xl'
          style={{backgroundColor:'yellow'}}>YELLOW</button>
        </div>
      </div>
    </div>
  )
}

export default App
