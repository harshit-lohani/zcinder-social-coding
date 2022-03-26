import React from 'react'
import  "./Friend.css"

function Friend() {
  return (
    <React.Fragment>
      <div className="friend_card">
        <div className="img-holder">
          <img className="profile_photo" src = "https://unsplash.com/photos/5E5N49RWtbA" /> 
        </div>
        <div className="basic-info">
          <p className ="friend_name_holder">
            <span className='friend_name'>Anuj Gore</span>
            <span className='friend_tag'>@Anuj7152</span>
          </p>
          <p className='friend_title'>Headmaster at Hogwarts</p>
        </div>
        <div className="remove-button">
          <button className='button'>
            Remove
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Friend