import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Player from './components/Player.jsx';
import { useState } from 'react';

function App() {
  
  return (
    <>
    <Router>
    <div className=''>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/home" element={<Player/>}></Route>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
