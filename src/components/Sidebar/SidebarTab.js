import React from 'react'
import  "./SidebarTab.css"

function Sidebar(props) {
  return (
    <React.Fragment>
      <div className='tab-main'>
        <div className='icon'>
          {/* <img src="#" alt=""></img> */}
        </div>
        <div className='tab-title'>
          <p>{props.name}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar