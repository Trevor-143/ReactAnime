import { useState, useEffect } from 'react'
import Pages from "./pages/pages"
import Search from "./components/Search"
import Results from './Results'
import { BrowserRouter, Link } from "react-router-dom";



function App() {
  return (
    <div>
        <BrowserRouter>
          <nav>
            <Link to={'/'}>Anime Xtreme</Link>
          </nav>
            <Search />
            <Pages />
        </BrowserRouter>

        {/* <footer>
          <h4>&copy; 2023</h4>
          <p>Jikan API</p>
        </footer> */}
    </div>
  )
}

export default App
