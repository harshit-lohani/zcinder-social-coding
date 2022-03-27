import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { ToggleSlider }  from "react-toggle-slider";
import './TotalContri.css'




function TotalContri() {
  const [active, setActive] = useState(false);

    
  return (
    <React.Fragment>
    <div className='total-contri-wrapper'>
        <div className='total-contri-number'>450,43</div>
        <div className='total-contri-text'>Total Contribution</div>
        <hr className='divider'/>
        <div className='slider-flex-container'>
          <p>This Month</p>
          <ToggleSlider onToggle={state => setActive(state)}/>
          {/* Slider is {active ? "active" : "inactive"} */}
          <p>All time</p>
          </div>
    </div>
    </React.Fragment>
  )
}

export default TotalContri;