import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './assets/components/View'
import Add from './assets/components/Add'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/view' element={<View />} />
        <Route path='/add' element={<Add />} />
        </Routes>
    </>
  )
}

export default App
