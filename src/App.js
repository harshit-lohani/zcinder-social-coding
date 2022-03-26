import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
       
    <Routes>
    
       
      
      <Route exact path='/' element={<Login/>}/>
      <Route path = '/dashboard' element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
