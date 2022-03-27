import React from 'react'
import codeforcesGET from '../../API-Get/codeforcesGET'
function CFContestHistory() {
    codeforcesGET("tourist",0)
    codeforcesGET("tourist",1)
    codeforcesGET("tourist",2)
    codeforcesGET("tourist",3)
    codeforcesGET("tourist",4)
    return (
    <React.Fragment>
        <div className='contest-history-wrapper'>
            <div className='contest-history-item'>
            <span className='contest-history-name' id='contest-0-name'></span>
            Rank- <span className='contest-history-rank' id='contest-0-rank'></span>
            Rating- <span className='contest-history-rating' id='contest-0-new-rating'></span>
            (<span className='contest-history-change' id='contest-0-rating-change'></span>)       
            </div>
            <div className='contest-history-item'>
            <span className='contest-history-name' id='contest-1-name'></span>
            Rank- <span className='contest-history-rank' id='contest-1-rank'></span>
            Rating- <span className='contest-history-rating' id='contest-1-new-rating'></span>
            (<span className='contest-history-change' id='contest-1-rating-change'></span>)       
            </div>
            <div className='contest-history-item'>
            <span className='contest-history-name' id='contest-2-name'></span>
            Rank- <span className='contest-history-rank' id='contest-2-rank'></span>
            Rating- <span className='contest-history-rating' id='contest-2-new-rating'></span>
            (<span className='contest-history-change' id='contest-2-rating-change'></span>)       
            </div>
            <div className='contest-history-item'>
            <span className='contest-history-name' id='contest-3-name'></span>
            Rank- <span className='contest-history-rank' id='contest-3-rank'></span>
            Rating- <span className='contest-history-rating' id='contest-3-new-rating'></span>
            (<span className='contest-history-change' id='contest-3-rating-change'></span>)       
            </div>
            <div className='contest-history-item'>
            <span className='contest-history-name' id='contest-4-name'></span>
            Rank- <span className='contest-history-rank'id='contest-4-rank'> </span>
            Rating- <span className='contest-history-rating' id='contest-4-new-rating'> </span>
            (<span className='contest-history-change' id='contest-4-rating-change'> </span>)       
            </div>
        </div>
    </React.Fragment>
  )
}

export default CFContestHistory