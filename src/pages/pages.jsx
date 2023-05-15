import React from 'react'
import Info from './Info'
import Home from './Home'
import Results from './Results'

import { Route, Routes } from "react-router-dom";

function pages() {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/results/:text" element = {<Results />} />
        <Route path="/infomation/:id" element = {<Info />} />
    </Routes>
  )
}

export default pages