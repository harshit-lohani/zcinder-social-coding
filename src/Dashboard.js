import React from 'react'
import {Link} from "react-router-dom"
import DashNav from './components/DashNav'
import Sidebar from './components/NavSidebar'
import './dashboard.css'
import leetcode from './leetcode'
// import output from './github'
import interviewbit from './interviewbit'

// var Codeforces = require('./node_modules/codeforces-api');
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// async function load() {
  
// }

function Dashboard() {
  let obj = leetcode('ishangarg');

  console.log(obj);
  // leetcode('ishangarg');
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