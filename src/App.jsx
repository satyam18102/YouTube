import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Player from './components/Player.jsx';

function App() {
  
  return (
    <>
    <Router>
    <div className=''>
      <Routes>
        <Route path="/" Component={Dashboard}></Route>
        <Route path="/video/:id" Component={Player}></Route>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
