
import './App.css';
import User from './components/User';
import './pages/Login'
// import User from './components/User';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
{/* <User/> */}
<Login/>
<User/>
<Signup/>
    </div>
  );
}

export default App;
