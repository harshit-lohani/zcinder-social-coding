import React from 'react'

import {useLocation} from 'react-router-dom'
import InputForm from '../components/InputForm/InputForm';
import leetcode from '../leetcode'
import interviewbit from '../interviewbit'
import codeforces from '../codeforces'
import github from '../github'
import DashNav from '../components/DashNav';

function Dashboard() {
  const location = useLocation(); 
  const {emailID,isNew} = location.state  

    return (

    <React.Fragment>
      <DashNav/>
      <img src="" className='profile-photo'/>Photo goes here
      <div>Email : {emailID}</div>
      {isNew?<InputForm />:null}
    </React.Fragment>
  )
}



export default Dashboard