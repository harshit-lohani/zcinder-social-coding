import React, { useState } from 'react'

function InputForm() {
  const [username,setUserName] = useState("") ; 
  const [git_handle,setGitHandle] = useState("") ; 
  const [ib_handle,setIbHandle] = useState("") ; 
  const [leet_handle,setLeetHandle] = useState("") ; 
  
  const userChangeHandler = (event) => {
    console.log(event.target)
    setUserName(event.target.value)
  }
  const leetChangeHandler = (event) => {
    console.log(event.target)
    setLeetHandle(event.target.value)
  }
  const ibChangeHandler = (event) => {
    console.log(event.target)
    setIbHandle(event.target.value)
  }
  const gitChangeHandler = (event) => {
    console.log(event.target)
    setGitHandle(event.target.value)
  }

  const submitHandler = (event) => {
      event.preventDefault() ;
  }

  return (
    <React.Fragment>
    <div className='container'>
    <form onSubmit={submitHandler}>
        <h1>Complete your profile</h1>
        <div className='form'>
        <div className='field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='username' value={username} onChange={userChangeHandler}/>
        </div>
        <div className='field'>
            <label>Github handle</label>
            <input type='text' name='github-handle' placeholder='github-handle' value={git_handle} onChange={gitChangeHandler}/>
        </div>
        <div className='field'>
            <label>Leetcode handle</label>
            <input type='text' name='leet-handle' placeholder='leetcode-handle' value={leet_handle} onChange={leetChangeHandler}/>
        </div>
        <div className='field'>
            <label>Interviewbit Handle</label>
            <input type='text' name='ib-handle' placeholder='interviewbit-handle' value={ib_handle} onChange={ibChangeHandler}/>
        </div>
        <button className='form-button'>Submit</button>
        </div>
    </form>
    </div>
    </React.Fragment>
  )
}

export default InputForm