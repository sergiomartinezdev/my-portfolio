import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'

import Home from "./components/Home"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Landing section (default Vite look with tweaks) */}
      <div className="landing">
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React + Sergio</h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
          <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      {/* Your portfolio sections */}
      <Home />
      <Skills />
      <Contact />
    </>
  )
}

export default App

