import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { ToggleSlider }  from "react-toggle-slider";



function TotalContri() {
    const [active, setActive] = useState(false);

    
  return (
    <div>
        <div>Total Contribution</div>
        <div>some number here</div>
        <ToggleSlider onToggle={state => setActive(state)}/>
            Slider is {active ? "active" : "inactive"}
    </div>
  )
}

export default TotalContri;