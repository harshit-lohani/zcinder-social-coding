import React from 'react'
import Friend from './Friend'
import "./Friends.css"

function Friends() {
  return (
    <div className='friend_container'>
        <Friend />
        <Friend />
    </div>
  )
}

export default Friends