import React from "react";
import './Avartar.css';

function Avartar(props){
    return(
        <img
            className="avartar"
            src={props.user.avatarUrl}
            alt=""/>
    )
}

export default Avartar;