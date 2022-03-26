import React from 'react'
import Friend from './Friend'
import "./Friends.css"

function Friends() {
  return (
    <div className='friend_container'>
        <div className='friend-header'>
          Friends (415)
        </div>
        <div className="friend-list">
          <Friend />
          <Friend />
        </div>
    </div>
  )
}

export default Friends