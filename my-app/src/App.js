import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import PieChart from './components/piechart';
import Home from './pages/Home';
import { Doughnut } from 'react-chartjs-2';


function App() {
  return (
    <div className="App"> 
      <Router>
        <Nav>

        </Nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
