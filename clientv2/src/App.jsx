import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'

import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { NavBar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
