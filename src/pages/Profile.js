import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Link,Navigate} from "react-router-dom"
import DashNav from '../components/DashNav'
import Friends from '../components/Friends/Friends'
import Sidebar from '../components/Sidebar/Sidebar'
import NavBar from '../components/NavBar'
import UserInfo from '../components/UserInfo/UserInfo'
import './Profile.css'

function Profile({authorised}) {
  if(!authorised){
    return <Navigate to='/'/>
  }
  return (
    <React.Fragment>
      <nav>
        <NavBar />
      </nav>
      <div class="profile-flex-container">
        <Sidebar />
        {/* <Friends /> */}
        <UserInfo/>

      </div>
    </React.Fragment>
  )
}

export default Profile