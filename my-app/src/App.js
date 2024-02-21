import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Display';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Display from './pages/Display';


function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/display" element={<Display/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
