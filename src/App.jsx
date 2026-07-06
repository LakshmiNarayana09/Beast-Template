import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CoachDetails from './pages/CoachDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coach/:id" element={<CoachDetails />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
