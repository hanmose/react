import React from "react";
import './clock.css'

function Clock(props){
    return(
        <div>
            <h2 className="clock">
                {new Date().toLocaleTimeString()}
            </h2>
        </div>
    )
}

export default Clock;