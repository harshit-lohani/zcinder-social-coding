import React from 'react'

function GitStats() {
  return (
    <React.Fragment>
      <img className='gitstat-logo'/>
      <div id='git-followers'></div>
      <div id='git-followers-text'>Followers</div>
      <img className='gitstat-logo'/>
      <div id='git-following'></div>
      <div id='git-following-text'>Following</div>
    </React.Fragment>
  )
}

export default GitStats