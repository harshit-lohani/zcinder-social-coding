import React from 'react'
import {Link} from "react-router-dom"
import DashNav from './components/DashNav'
import Sidebar from './components/NavSidebar'
import './dashboard.css'
import leetcode from './leetcode'
// import github from './github'
import interviewbit from './interviewbit'
import codeforces from './codeforces'
// import codeforces_data from '../node_modules/codeforces-api';



// var Codeforces = require('./node_modules/codeforces-api');
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// async function load() {
  
// }

function Dashboard() {
  let obj = codeforces('ishangarg');

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