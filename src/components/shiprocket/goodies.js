import React from "react";
import shiprocket from "../../API-Get/shiprocket";

function goodies(){
    shiprocket('191686343');
    

    return (
        <React.Fragment>
            <div>AWB Code: <span id="sr-awb-code"></span></div>
            <div>Consignee Name: <span id="sr-consignee-name"></span></div>
            <div>Current Status: <span id="sr-current-status"></span></div>
            <div>Destination: <span id="sr-destination"></span></div>
            <div>Origin: <span id="sr-origin"></span></div>
            


        </React.Fragment>

    )
};

export default goodies;