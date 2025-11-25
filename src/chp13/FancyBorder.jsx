import React from "react";
import "./Castle.css";

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            <div className="smoke"></div>
            <div className="light-glow"></div>
            {props.children}
        </div>
    );
}

export default FancyBorder;
