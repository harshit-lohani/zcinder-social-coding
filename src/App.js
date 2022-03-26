import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './pages/Profile';
import NavBar from './components/DashNav'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route path = '/dashboard' element={<Dashboard/>}/>
      <Route path = '/profile' element={<Profile/>} />
    </Routes>
    </div>
  );
}

export default App;
