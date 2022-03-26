import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom"
import DashNav from '../components/DashNav'
import Friends from '../components/Friends/Friends'
import Sidebar from '../components/Sidebar/Sidebar'

function Profile() {
  return (
    <React.Fragment>
        <DashNav />
        <Sidebar />
        <Friends />
    </React.Fragment>
  )
}

export default Profile