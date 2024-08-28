import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='text-center'>post</h1>
                <div className="  text-black mb-4 w-full bg-orange-200 p-4">
                    <h2>user name </h2>
                    <p>2 hours ago</p>
                </div>
    </>
  )
}

export default App
