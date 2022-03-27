import React from 'react'
import  "./Sidebar.css"
import SidebarTab from './SidebarTab'

function Sidebar() {
  return (
    <React.Fragment className='sidebar-main-fragment'>
      <div className='sidebar-main'>
        <div className='sidebar-main-section'>
          <SidebarTab name='Information'/>
          <SidebarTab name='Friends'/>
          <SidebarTab name='Information'/>
          <SidebarTab name='Information'/>
        </div>
        <hr/> 
        <div className='sidebar-settings-section'>
          <SidebarTab name='SignOut'/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar