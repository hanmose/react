import React from "react";
import GAvartar from "./GAvartar";

function GUserInfo(props){
    return(
        <div>
        <GAvartar user={props.user}/>
        {props.user.img}
        </div>
    )
}

export default GUserInfo;