import './App.css';
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Login from './Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Repositories from './components/Github/Repositories/Repositories';
import LeaderBoard from './components/LeaderBoard/Leaderboard';


function App() {
  var user = JSON.parse(localStorage.getItem('userInfo')); 
  var isAuthenticated = user==null?false:true 
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login authorised={isAuthenticated}/>}/>
        <Route path = '/dashboard' element={<Dashboard authorised={isAuthenticated}/>}/>
        <Route path = '/profile' element={<Profile authorised={isAuthenticated} />}/>
        <Route path = '/test' element={<LeaderBoard/>} />
      </Routes>
    </div>
  );
}

export default App;
