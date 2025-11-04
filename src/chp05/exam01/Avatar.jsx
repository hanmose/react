import React from "react";
import './Avarta.css'

function Avatar(props) {
    return(
        <img
            className="avatar"
            src={props.user.avatarUrl}
        />
    );

}

export default Avatar;