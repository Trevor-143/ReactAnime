import { useState, useEffect } from 'react'
import Home from "./components/Home"
import Search from "./components/Search"
import Results from './Results'



function App() {
  return (
    <div>

      <Search />
      <Home />
    </div>
  )
}

export default App
