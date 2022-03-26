import React from 'react'
import {useLocation} from 'react-router-dom'
import InputForm from './components/InputForm/InputForm';

function Dashboard() {
  const location = useLocation(); 
  const {emailID,isNew} = location.state  
    return (
    <React.Fragment>
      <div>Navbar</div>
      <img src="" className='profile-photo'/>Photo goes here
      <div>Email : {emailID}</div>
      {isNew?<InputForm />:null}
    </React.Fragment>
  )
}

export default Dashboard