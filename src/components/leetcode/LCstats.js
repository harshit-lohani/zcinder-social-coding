import React from 'react'
import leetcodeGET from '../../API-Get/leetcodeGET';

function LCstats(){
    leetcodeGET('ishangarg09')
    return (
        <React.Fragment>
            <div>Rank: <span id='lc-rank'></span></div>
            <div>Acceptance Rate: <span id='lc-acc-rate'></span></div>
            <div>Reputation: <span id='lc-reputation'></span></div>
            <div>Easy Submitted: <span id='lc-easy'></span></div>
            <div>Medium Submitted: <span id='lc-medium'></span></div>
            <div>Hard Submitted: <span id='lc-hard'></span></div>
            <div>Easy Acceptance Rate: <span id='lc-easy-acc'></span></div>
            <div>Medium Acceptance Rate: <span id='lc-medium-acc'></span></div>
            <div>Hard Acceptance Rate: <span id='lc-hard-acc'></span></div>

        </React.Fragment>


    )

}

export default LCstats;