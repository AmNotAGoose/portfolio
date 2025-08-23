import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'

import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Awards from './components/Awards';

import { NavBar } from './components/NavBar'
import { FooterBar } from './components/FooterBar'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className='main-container' data-theme={theme}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
      <FooterBar />
    </div>
  )
}

export default App
