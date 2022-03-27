import React from 'react'
import TotalContri from './TotalContri'
import GitStats from './GitStats'
import Repositories from './Repositories/Repositories'

function GitModule() {
  return (
    <React.Fragment>
      <TotalContri />
      <GitStats/>
      <Repositories />
    </React.Fragment>
  )
}

export default GitModule