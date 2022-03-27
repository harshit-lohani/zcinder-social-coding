import React,{useState} from 'react'
import {Navigate, useLocation, useNavigate, useResolvedPath} from 'react-router-dom'
import InputForm from '../components/InputForm/InputForm';
import leetcode from '../leetcode'
import interviewbit from '../interviewbit'
import codeforces from '../codeforces'
import github from '../github'
import DashNav from '../components/DashNav';
import NavBar from '../components/NavBar';
import GitPage from './GitPage';
import CFPage from './CFPage';
import LeetPage from './LeetPage';
import OverViewPage from './OverViewPage';
function Dashboard({authorised}) {
  var user = JSON.parse(localStorage.getItem('userInfo'));
  var details = JSON.parse(localStorage.getItem('userDetails'));
  const [index,setIndex] = useState(0)
  if(!authorised){
    return <Navigate to='/'/>
  }
  return (
    <React.Fragment>
      <NavBar/>
      <DashNav setIndex={setIndex} />
      {index==1?<GitPage />:null}
      {index==2?<LeetPage />:null}
      {index==0?<OverViewPage />:null}
      {index==3?<CFPage />:null}

      <img src="" className='profile-photo'/>Photo goes here
      <div>Email : {user.user.email}</div>
      {details.isNewUser?<InputForm />:null}
    </React.Fragment>
  )
}



export default Dashboard