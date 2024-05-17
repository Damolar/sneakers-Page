
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App
