import React from 'react'
import {Link} from "react-router-dom"
import DashNav from './components/DashNav'
import Sidebar from './components/NavSidebar'
import './dashboard.css'

function Dashboard() {
    
    
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