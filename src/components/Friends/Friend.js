import React from 'react'
import  "./Friend.css"

function Friend() {
  return (
    <React.Fragment className="friend_card">
        <img className="profile_photo" src = "https://unsplash.com/photos/5E5N49RWtbA" /> 
        <p><h2 className='friend_name'>Anuj Gore</h2>
        <h3 className='friend_tag'>@Anuj7152</h3></p>
        <p><div className='friend_title'>Headmaster at Hogwarts</div></p>

    </React.Fragment>
  )
}

export default Friend