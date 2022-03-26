import logo from './logo.svg';
import './App.css';
import {signInWithGoogle} from "./Firebase"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}> Sign in With Google </button>
    </div>
  );
}

export default App;
