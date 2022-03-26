import React from 'react'
import {Link} from "react-router-dom"
import leetcode from './leetcode'
import interviewbit from './interviewbit'

// var Codeforces = require('./node_modules/codeforces-api');
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// async function load() {
  
// }



function Dashboard() {
  let obj = interviewbit('ishangarg');

  console.log(obj);
  // leetcode('ishangarg');
    return (
    <div>Dashboard</div>
  )
}



export default Dashboard