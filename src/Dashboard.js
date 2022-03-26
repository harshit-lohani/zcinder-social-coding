import React from 'react'
import {Link} from "react-router-dom"
import DashNav from './components/DashNav'
import Sidebar from './components/NavSidebar'
import './dashboard.css'
import leetcode from './leetcode'
import interviewbit from './interviewbit'
import codeforces from './codeforces'
import github from './github'

function Dashboard() {
  let obj = github('ishangarg9');

  console.log(obj);
  // codeforces_data();
  // leetcode('ishangarg');



  // github('ishangarg'); //this will save the user info in user.json file
    return (
        <div>
            <div>Dashboard</div>
            <div className='main'>
                
                <div className='dashnav'>
                    <DashNav/>
                 </div>
                 
            </div>
    
        </div>
  )
}



export default Dashboard