import React from "react";
import Avartar from "./Avartar";
import './UserInfo.css'

function UserInfo(props){
    return(
        <div className="user-info">
            <Avartar user={props.user}/>
            <div className="user-info-name"></div>
            {props.user.name}
        </div>
    )
}

export default UserInfo;