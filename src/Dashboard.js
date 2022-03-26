import React from 'react'
import {Link} from "react-router-dom"
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
    <div>Dashboard</div>
  )
}



export default Dashboard