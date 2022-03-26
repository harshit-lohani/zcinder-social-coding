import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';
import Friends from './components/Friends/Friends';
import TotalContri from './components/TotalContri';


function App() {
  return (
    <div className="App">
       
    <Routes>
    
       
      
      <Route exact path='/' element={<Login/>}/>
      <Route path = '/dashboard' element={<Dashboard/>}/>
      <Route path = '/friends' element={<Friends/>} />
      <Route path = '/test' element={<TotalContri/>} />
   </Routes>
    </div>
  );
}

export default App;
