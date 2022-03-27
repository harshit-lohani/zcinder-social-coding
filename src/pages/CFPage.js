import React from 'react'
import CFContestHistory from '../components/Codeforces/CFContestHistory'
import CFStats from '../components/Codeforces/CFStats'

function CFPage() {
  return (
    <React.Fragment>
      <CFStats />
      <CFContestHistory />
    </React.Fragment>
  )
}

export default CFPage