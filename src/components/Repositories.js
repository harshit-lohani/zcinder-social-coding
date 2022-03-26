import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./Repositories.css"



function Repositories() {
    const [totalrepo,setTotalrepo]=useState(0);
    const [repos,setRepos]=useState([{name:"testname",dectription:"testdescription",stack1:"Java",stack2:"Javascript",stack3:"Python"}]);

    const displayRepos=repos.map((Repo) => {
     
     return (
         <>
       <div>{Repo.name}</div>
       <div>{Repo.description}</div>
       <div>Stacks
       <div>{Repo.stack1}</div>
       <div>{Repo.stack2}</div>
       <div>{Repo.stack3}</div>
       </div>
       </>

       );});
    
  return (
    <div>
        <div>{totalrepo} Repositories</div>
        <div>{displayRepos}</div>
        
    </div>
  )
}

export default Repositories;