import React from 'react'

import {Navigate, useLocation, useNavigate, useResolvedPath} from 'react-router-dom'
import InputForm from '../components/InputForm/InputForm';
import leetcode from '../leetcode'
import interviewbit from '../interviewbit'
import codeforces from '../codeforces'
import github from '../github'
import DashNav from '../components/DashNav';
import NavBar from '../components/NavBar';
import { Redirect } from 'react-router-dom';

function Dashboard({authorised}) {
  var user = JSON.parse(localStorage.getItem('userInfo'));
  var details = JSON.parse(localStorage.getItem('userDetails'));
  if(!authorised){
    return <Navigate to='/'/>
  }
  return (
    <React.Fragment>
      <NavBar/>
      <img src="" className='profile-photo'/>Photo goes here
      <div>Email : {user.user.email}</div>
      {details.isNewUser?<InputForm />:null}
    </React.Fragment>
  )
}



export default Dashboard