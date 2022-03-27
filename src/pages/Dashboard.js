import React from 'react'

import {useLocation, useResolvedPath} from 'react-router-dom'
import InputForm from '../components/InputForm/InputForm';
import leetcode from '../leetcode'
import interviewbit from '../interviewbit'
import codeforces from '../codeforces'
import github from '../github'
import DashNav from '../components/DashNav';

function Dashboard() {
  var user = JSON.parse(localStorage.getItem('userInfo'));
  var details = JSON.parse(localStorage.getItem('userDetails'));

  console.log(user);
  console.log(details);
    return (

    <React.Fragment>
      <DashNav/>
      <img src="" className='profile-photo'/>Photo goes here
      <div>Email : {user.user.email}</div>
      {/* {isAuthenticated?<InputForm />:null} */}
    </React.Fragment>
  )
}



export default Dashboard