import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Repositories from './components/Repositories';



function App() {

  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route path = '/dashboard' element={<Dashboard/>}/>
      <Route path = '/profile' element={<Profile/>} />
      <Route path = '/test' element={<Repositories/>} />
   </Routes>
    </div>
  );
}

export default App;
