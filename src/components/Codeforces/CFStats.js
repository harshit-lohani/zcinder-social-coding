import React from 'react'
import codeforcesGET from '../../API-Get/codeforcesGET'
//curr rating, max rating, rank, no. of contest, max rank, contest history
// contest name, rating change, new rating, rank 
function CFStats() {
    codeforcesGET("tourist",0)
  return (
    <React.Fragment>
        <div className="cf-stats-wrapper">
            <div className='cf-stats-text'>Rating: <span id='cf-rating'></span></div>
            <div className='cf-stats-text'>Max Rating: <span id='cf-max-rating'></span></div>
            <div className='cf-stats-text'>Rank: <span id='cf-rank'></span></div>
            <div className='cf-stats-text'>Max Rank: <span id='cf-max-rank'></span></div>
            <div className='cf-stats-text'>No. of contests: <span id='cf-no-of-contests'></span></div>
        </div>
    </React.Fragment>
  )
}

export default CFStats