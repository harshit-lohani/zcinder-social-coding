import React from 'react'
import './Rating.css'

function Rating() {
  return (
    <div className='rating-wrapper'>
        <div className='rating-header'>
            Rating
        </div>
        <div className='rating-container'>
            <div className='rating-label'>Codeforces</div>
            <div className='rating-value'>1415 (+15)</div>
        </div>
        <div className='rating-container'>
            <div className='rating-label'>Leetcode</div>
            <div className='rating-value'>1415 (+15)</div>
        </div>
        <div className='rating-container'>
            <div className='rating-label'>InterviewBit</div>
            <div className='rating-value'>1415 (+15)</div>
        </div>
    </div>
  )
}

export default Rating