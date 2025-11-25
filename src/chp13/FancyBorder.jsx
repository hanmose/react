import React from "react";
import "./Castle.css";

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {/* CSS 애니메이션용 요소 */}
            <div className="smoke"></div>
            <div className="light-glow"></div>
            {props.children}
        </div>
    );
}

export default FancyBorder;
