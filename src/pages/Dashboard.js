<<<<<<< Updated upstream
import React from 'react'
import {Link} from "react-router-dom"

function Dashboard() {
  return (
    <div>Dashboard</div>
=======
import React, { useEffect,useState } from 'react'

import {useLocation} from 'react-router-dom'
import InputForm from '../components/InputForm/InputForm';
import leetcode from '../leetcode'
import interviewbit from '../interviewbit'
import CodeForcesData from '../codeforces'
import github from '../github'
import DashNav from '../components/DashNav';
import { Button } from 'react-bootstrap';

function Dashboard() {
  const [count, setCount] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  
    // Update the document title using the browser API
    const getData=()=>{
      CodeForcesData.codeforces('ishangarg09')
      .then(response=>{
        setCount(response);
      console.log(count);
      })
      .catch();
    }

    return (

    <React.Fragment>
      <DashNav/>
      <img src="" className='profile-photo'/>Photo goes here
      <div>Email : </div>
      <Button
              className="btn btn-outline-secondary"
              type="button"
              onClick={getData}
            ></Button>
      
    </React.Fragment>
>>>>>>> Stashed changes
  )
}

export default Dashboard