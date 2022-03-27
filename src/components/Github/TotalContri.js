import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { ToggleSlider }  from "react-toggle-slider";




function TotalContri() {
    const [active, setActive] = useState(false);

    
  return (
    <div>
        <div className='total-contri-text'>Total Contribution</div>
        <div className='total-contri-number'>some number here</div>
        <div className='divider'/>
        <ToggleSlider onToggle={state => setActive(state)}/>
            Slider is {active ? "active" : "inactive"}
    </div>
  )
}

export default TotalContri;